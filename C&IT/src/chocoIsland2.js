const variants = {
  A1: ["A"],
  A2: ["A", "B", "C"],
  A3: ["A", "B", "C"],
  A4: ["A", "B"]
}


/** Lista e calcula o número de variações diferentes do nível que são possíveis com essas combinações. */
const getCombinations = () => {
  const { A1, A2, A3, A4 } = variants
  const variationsList = []

  for (const a of A2) {
    for (const b of A3) {
      if (b === 'A') {
        // se o jogador vai para essa parte, não acessa a área 4 já que aqui há uma saída
        const variation = `Área 1, Área 2: variação ${a}, Área 3: variação ${b}`
        variationsList.push(variation)
        continue
      }
      for (const c of A4) {
        const variation = `Área 1, Área 2: variação ${a}, Área 3: variação ${b}, Área 4: variação ${c}`
        variationsList.push(variation)
      }
    }
  }

  // Lista das variações diferentes
  console.log(variationsList)

  // Retorna o número de variações como resultado
  return variationsList.length
}

const result = getCombinations()
console.log(`O número de variações possíveis para este nível é ${result}`)
