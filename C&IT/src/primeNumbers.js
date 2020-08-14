const n = 120 // Primos até 120

const getPrimeNumbersUpTo = limit => {
  // Inicia um vetor onde o índice representa um número e seu valor dirá se é primo ou não
  const isPrime = Array(limit + 1).fill(true)

  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) { 
      // Se o número i é primo, então todos os seus múltiplos não são:
      for (let j = i + i; j <= limit; j += i ) {
        isPrime[j] = false
      }
    }
  }

  // primeNumbers é o vetor dos números primos após a serialização do vetor isPrime
  const primeNumbers = isPrime
    .map((isPrimeNum, num) => isPrimeNum && num) // Coloca números para os que são primos e false para os que não são
    .filter(primeNumber => primeNumber && primeNumber > 1) // Remove os falses, o 0 e o 1

  return primeNumbers
}

const result = getPrimeNumbersUpTo(n)
console.log(result)