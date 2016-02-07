export class kendoToStringValueConverter {
  toView(value, format, language) {
    return kendo.toString(value, format, language);
  }
}

export class kendoParseDateValueConverter {
  toView(value, format, language) {
    return kendo.parseDate(value, format, language);
  }
}

export class kendoParseIntValueConverter {
  toView(value, language) {
    return kendo.parseInt(value, language);
  }
}

export class kendoParseFloatValueConverter {
  toView(value, language) {
    return kendo.parseFloat(value, language);
  }
}

export class kendoParseColorValueConverter {
  toView(value) {
    return kendo.parseColor(value);
  }
}

export class kendoStringifyValueConverter {
  toView(obj) {
    return kendo.stringify(obj);
  }
}

export class kendoFormatValueConverter {
  toView(value, ...params) {
    params.unshift(value);

    return kendo.format.apply(this, params);
  }
}
