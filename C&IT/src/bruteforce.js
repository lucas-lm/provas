// 3 + m + n = 8 ou 6 + m + n = 8; m, n > 0
// Se 6 é o primeiro dígito, então m e n são 1: 611 - Única possibilidade com 6
// Se 3 é o primeiro dígito, então m e n podem ser: 1 e 4, 2 e 3: 314 ou 323 ou 332 ou 341
// Letras podem ser: ADX ou DAX; AXD ou DXA; XAD ou XDA sendo X = B, C, E ou F
// Testar todas as possíveis combinações de letras e dígitos no formato LLLDDD

/** Faz a permutação de strings */
const permute = (str) => {
  if (str.length < 2 ) return str

  const permutations = new Set()

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const rest = str.slice(0, i) + str.slice(i + 1, str.length)

    for (const permutation of permute(rest)) {
      permutations.add(char + permutation) 
    }
  }
  return permutations
}

/** Retorna os números possíveis para um dado primeiro dígito */
const getNumbersWith = (first=3) => {
  const maxNumber = 8 - first - 1 // Maior número possível
  const possibilities = new Set()

  for (let i = 1; i <= maxNumber; i++) {
    const num = `${first}${i}${8 - first - i}`
    possibilities.add(num)
  }

  return possibilities
}

/** Retorna todas as possibilidades de letras */
const getLetters = () => {
  const letters = new Set()
  // Letras podem ser: ADX ou DAX; AXD ou DXA; XAD ou XDA sendo X = B, C, E ou F
  const permutations = permute("ADX")
  const availableLetters = ["B", "C", "E", "F"]
  for (const permutation of permutations) {
    for (const letter of availableLetters) {
      letters.add(permutation.replace('X', letter))
    }
  }
  return letters
}

/** Retorna todas as possibilidades de senhas de acordo com vetor de letras e dígitos possíveis */
const getValidPasswords = (letters, digits) => {
  const validPasswords = new Set()
  for (const letter of letters) {
    for (const digit of digits) {
      // Testar todas as possíveis combinações de letras e dígitos no formato LLLDDD
      validPasswords.add(`${letter}${digit}`)
    }
  }
  return Array.from(validPasswords)
}

/** Calcula o tempo em segundos que levaria para testar as senhas */
const getExpectedTime = (passwordsCount) => {
  const expectedTimeInSeconds = 2*passwordsCount
  return `${expectedTimeInSeconds}s (${(expectedTimeInSeconds/60).toFixed(2)} minutos)`
} 

const numbersWith3 = getNumbersWith(3)
const numbersWith6 = getNumbersWith(6)
const possibleNumbers = [...numbersWith3, ...numbersWith6]
const possibleLetters = getLetters()

const passwords = getValidPasswords(possibleLetters, possibleNumbers)

const result = `
------------------------------------------------------------
  Há um total de ${passwords.length} senhas possíveis.
============================================================
  Lista de senhas possíveis:
------------------------------------------------------------
${passwords.join('\t')}
------------------------------------------------------------
`

console.log(result)
const justInTime = getExpectedTime(passwords.length - 1) // Descontando a primeira tentativa, pois o tempo só começa a contar depois da primeira tentativa incorreta
console.log('Ela vai conseguir testar todas as combinações possíveis a tempo! 🎉🎉🎉')
console.log(`Ela leva ${justInTime} para testar tudo e ainda vai sobrar 1 min. de folga 💅`)
