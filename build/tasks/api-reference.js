var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var mkpath = require('mkpath');
var glob = require("glob");

gulp.task('api:extract', function(cb) {
  glob("./doc/kendo/**/*.md", {}, function (er, files) {
    files.forEach(function(file) {

      console.log("parsing " + file);

      var json = fs.readFile(file, "utf8", function(err, data) {
        var lines = data.match(/[^\r\n]+/g);

        var tree = parseFile(lines);

        var normalized = normalize(tree);

        var cleanedup = cleanup(normalized);

        var relPath = file.replace('./doc/kendo', './doc/kendo-api')
            .replace('.md','.json');

        mkpath.sync(path.dirname(relPath));

        console.log("writing " + relPath);

        fs.writeFileSync(relPath, JSON.stringify(cleanedup));
      });
    });

    cb();
  });
});

function cleanup(tree) {
  cleanupItem(tree);

  return tree;
}

function cleanupItem(item) {
  if(item.children && item.children.length > 0) {
    item.children.forEach(function (child) { cleanupItem(child); });
  } else {
    delete item.children;
  }

  delete item.hashCount;
  delete item.line;
  delete item._description;
}


function normalize(tree) {
  normalizeEvents(tree);
  normalizeConfiguration(tree);
  normalizeMethods(tree);

  return tree;
}

function normalizeMethods(tree) {
  var methods = tree.children.find(function (i) { return i.name === 'Methods'});

  if(methods) {
    methods.children.forEach(function(method) {
      method.parameters = [];
      method.description = method._description;

      var parameters = method.children.find(function (i) { return i.name === 'Parameters' });
      if(parameters) {
        parameters.children.forEach(function (parameter) {
          method.parameters.push({
            name: parameter.name,
            description: parameter._description
          });
        });
      }
    });
  }
}

function normalizeConfiguration(tree) {
  var configuration = tree.children.find(function (i) { return i.name === 'Configuration'});

  if(configuration) {
    configuration.children.forEach(function(prop) {
      var name = prop.name;
      prop.name = name.split(' ')[0];

      if(name.match(/`(.*?)`/)) {
        var type = name.match(/`(.*?)`/)[1];
        prop.type = type.match(/\|/) ? type.split(/\|/) : type;
      }

      if(name.match(/default/)) {
        if(name.match(/\*\(default:(.*?)\)\*/)) {
          prop.default = name.match(/\*\(default:(.*?)\)\*/)[1]
        }
      }

      prop.description = prop._description;
    });
  }
}

function normalizeEvents(tree) {
  var events = tree.children.find(function (i) { return i.name === 'Events' });

  if(events) {
    events.children.forEach(function(event) {
      event.description = event._description;

      var eventData = event.children.find(function (i) { return i.name === 'Event Data'});
      if(eventData) {
        event.args = [];
        eventData.children.forEach(function(eventDataItem) {
          event.args.push(eventDataItem.name.split(' ')[0]);
        });
      }
    });
  }
}


function parseFile(lines) {
  var tree = [];

  lines.forEach(function (line) {
    if(line.match(/^(#.*?)\s/)) {
      var hashes = line.match(/^(#.*?)\s/)[1];
      var hashCount = hashes.length;

      tree.push({
        hashCount: hashCount,
        line: line,
        name: line.replace(/^#.*?\s/, ''),
        children: []
      });
    } else {
      if(tree.length > 0) {
        if(!tree[tree.length - 1]._description) {
          tree[tree.length - 1]._description = '';
        }

        tree[tree.length - 1]._description += line;
      }
    }
  });


  for(var i = tree.length - 1; i >= 0; i--) {
    var found = false;
    for(var x = i - 1; x >= 0; x--) {
      if(!found) {
        if(tree[x].hashCount < tree[i].hashCount) {
          found = true;
          tree[x].children.push(tree[i]);
        }
      }
    }
  }

  return tree[0];
}
