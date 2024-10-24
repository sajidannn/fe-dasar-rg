function kelvinToCelsius(kelvin) {
  return Number((kelvin - 273.15).toFixed(2))
}

function kelvinToFahrenheit(kelvin) {
  return Number(((kelvin - 273.15) * 9 / 5 + 32).toFixed(2))
}

function celsiusToFahrenheit(celsius) {
  return Number(((celsius * 9 / 5) + 32).toFixed(2))
}

function celsiusToKelvin(celsius) {
  return Number((celsius + 273.15).toFixed(2))
}

function fahrenheitToKelvin(fahrenheit) {
  return Number(((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(2))
}

function fahrenheitToCelsius(fahrenheit) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(2))
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  if (initialUnit === 'C') {
    return finalUnit === 'K' ? celsiusToKelvin(temperature) : celsiusToFahrenheit(temperature)
  } else if (initialUnit === 'K') {
    return finalUnit === 'F' ? kelvinToFahrenheit(temperature) : kelvinToCelsius(temperature)
  } else if (initialUnit === 'F') {
    return finalUnit === "C" ? fahrenheitToCelsius(temperature) : fahrenheitToKelvin(temperature)
  }
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
