/// Dados de entrada
const speed = 80 // Velocidade em km/h
const angleInDeg = 45 // Angulo em graus
const timeInSeconds = 5 // Tempo em segundos

/** Converte graus para radianos */
const degToRad = angle => angle * Math.PI/180

/** Converte segundos para horas*/
const secondsToHours = time => time/3600

/** Converte kilometros para metros */
const kilometersToMeters = distance => distance * 1000

/** Decompõe a velocidade em um vetor com componentes x e y */
const speedToVector = (speed, angle) => {
  const speedX = speed * Math.cos(angle)
  const speedY = speed * Math.sin(angle)
  return [speedX, speedY]
}

/** Distância a partir de velocidade e tempo */
const getDistance = (speed, time) => speed * time

// A distância horizontal percorrida é calculada pelo componente x da velocidade:

const angleInRad = degToRad(angleInDeg)
const timeInHours = secondsToHours(timeInSeconds)
const [speedX] = speedToVector(speed, angleInRad)

const distance = getDistance(speedX, timeInHours)

/// Resultado

const result = kilometersToMeters(distance)
console.log(`A distância horizontal após 5 segundos é de ${result} metros`)
console.log(`Aproximadamente ${result.toFixed(2)} metros`)
