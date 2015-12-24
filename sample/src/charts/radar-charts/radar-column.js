export class RadarColumn {
  series = [{
    type: 'radarColumn',
    name: 'Nutrients',
    data: [
      5, 1, 1, 5, 0, 1,
      1, 2, 1, 2, 1, 0,
      0, 2, 1, 0, 3, 1,
      1, 1, 0, 0, 0
    ]
  }];

  categoryAxis = {
    categories: [
      'Df', 'Pr', 'A', 'C', 'D', 'E',
      'Th', 'Ri', 'Ni', 'B', 'F', 'B',
      'Se', 'Mn', 'Cu', 'Zn', 'K', 'P',
      'Fe', 'Ca', 'Na', 'Ch', 'Sf'
    ]
  };
}
