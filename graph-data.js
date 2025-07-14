const taxData = [
  { year: 1945, rate: 75 },  // 1955–1983
  { year: 1951, rate: 75 },  // 1955–1983
  { year: 1955, rate: 67 },  // 1955–1983
  { year: 1955, rate: 67 },  // 1955–1983
  { year: 1983, rate: 60 },  // 1983–1985
  { year: 1985, rate: 49 },  // 1985–1990
  { year: 1990, rate: 47 },  // 1990–2004
  { year: 2004, rate: 47 },  // 2004–2007
  { year: 2025, rate: 45 }   // 2025
];

window.graphData = {
  traces: [
    {
      x: taxData.map(point => point.year),
      y: taxData.map(point => point.rate),
      type: 'line',
      name: 'Top Tax Rate',
      fill: 'tozeroy',
      fillcolor: 'rgba(55, 83, 109, 0.5)',
      line: {
        color: 'rgb(55, 83, 109)'
      }
    }
  ],
  layout: {
    title: 'Optional Graph (Historical Top Tax Rate in Australia)',
    barmode: 'group',
    autosize: true,
    xaxis: {
      title: 'Year',
      tickangle: -45
    },
    yaxis: {
      title: 'Tax Rate (%)',
      range: [0, 100]
    },
    margin: {
      l: 40,  // left margin in pixels
      r: 40,  // right margin
      t: 60, // top margin
      b: 60, // bottom margin
      pad: 4  // extra padding between plot and axis lines
    },
  }
};
