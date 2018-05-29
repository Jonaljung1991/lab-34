function toFahrenheit(degrees) {
  if (!isNaN(parseInt(degrees)) && isFinite(degrees)) {
    if (degrees >= -273.15) {
      return (degrees * 9/5 + 32);
    }
  }
    return NaN;
}
export {
  toFahrenheit
};
