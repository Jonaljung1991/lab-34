function toFahrenheit(degrees) {
  if (!isNaN(parseInt(degrees)) && isFinite(degrees)) {
    if (degrees >= -273.15) {
      return true;
    }
  } else {
    return NaN;
  }
}
export {
  toFahrenheit
};
