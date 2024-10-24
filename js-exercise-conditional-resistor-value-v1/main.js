function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {
  const bandColor = {
    black: {
      significantVal: '0',
      multiplier: 1,
      tolerance: 20
    },
    brown: {
      significantVal: '1',
      multiplier: 10,
      tolerance: 1
    },
    red: {
      significantVal: '2',
      multiplier: 100,
      tolerance: 2
    },
    orange: {
      significantVal: '3',
      multiplier: 1000
    },
    yellow: {
      significantVal: '4',
      multiplier: 10000
    },
    green: {
      significantVal: '5',
      multiplier: 100000
    },
    blue: {
      significantVal: '6',
      multiplier: 1000000
    },
    violet: {
      significantVal: '7',
      multiplier: 10000000
    },
    grey: {
      significantVal: '8'
    },
    white: {
      significantVal: '9'
    },
    gold: {
      multiplier: 0.1,
      tolerance: 5
    },
    silver: {
      multiplier: 0.001,
      tolerance: 10
    }
  };

  const significantFigure = bandColor[bandColor1].significantVal + bandColor[bandColor2].significantVal
  const resistorVal = significantFigure * bandColor[bandColor3].multiplier

  return `${resistorVal} ohm ±${bandColor[bandColor4].tolerance}%`
}

console.log(resistorValue('brown', 'black', 'red', 'gold'));
console.log(resistorValue('red', 'red', 'red', 'gold'));
console.log(resistorValue('yellow', 'violet', 'green', 'silver'));
console.log(resistorValue('blue', 'grey', 'green', 'silver'));

module.exports = resistorValue;
