const ftoc = function(tempF) {
  let convToC1 = tempF - 32
  let convToC2 = convToC1 / 1.8
  return convToC2.toFixed(1)
  }
  
  const ctof = function(tempC) {
  let convToF1 = tempC * 1.8
  let convToF2 = convToF1 + 32
  return convToF2.toFixed(1)
  }

module.exports = {
  ftoc,
  ctof
}
