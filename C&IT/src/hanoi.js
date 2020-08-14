// O número mínimo de movimentos para solucionar uma Torre de Hanói é 2^n - 1, sendo n o número de discos.

/** Calcula o número mínimo de movimentos para solucionar o enigma */
const getMinimumMovesNumber = n => 2 ** n - 1

const disksCount = 5
const minimum = getMinimumMovesNumber(disksCount)

const result = `
  Para ${disksCount} discos são necessários ${minimum} movimentos no mínimo para solucionar o enigma.
`

console.log(result)
