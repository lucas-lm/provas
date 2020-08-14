// O último número da linha N é sempre N*N
// A linha N contém apenas números que sejam maiores do que (N-1)*(N-1)
// Portanto, todos os números menores que N*N e maiores que (N-1)*(N-1) estão na minha N
// Logo, se o número k está na linha N, então o próximo inteiro da raiz quadrada de k é N

/** Retorna o número da linha que contém o número k */
const lineOfNumber = (k) => Math.ceil(Math.sqrt(k))

const N = lineOfNumber(1969)

const result = `
  O número 1969 foi escrito na linha ${N}.
  O código é ${N}, Claire! ⏳⌛
`

console.log(result)
