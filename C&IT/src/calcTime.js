const d = 149600000 // distância a ser percorrida em km
const s = 28440 // velocidade em km/h

const getTimeInHours = (distance, speed) => distance/speed
const hoursToDays = timeInHours => timeInHours/24

const timeInHours = getTimeInHours(d, s)
const timeInDays = hoursToDays(timeInHours)

/// Resultado:

const result = timeInDays
console.log(`o tempo em dias que será necessário para percorrer ${d}km a ${s}km/h é ${result}`)
console.log(`Aproximadamente ${Math.round(result)} dias`)
