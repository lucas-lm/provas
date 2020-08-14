// 8 setores de áreas iguais: 8*S = A
// Portanto, a área de 1 setor é S = A/8
// O mesmo vale para a área do centro: SCentral = ACentral/8
// A área de busca vai ser S - SCentral

const TOTAL_AREA = 2827.43
const CENTRAL_AREA = 314.15

const getSectorArea = (totalArea, centralArea) => (totalArea / 8) - (centralArea / 8)

const rescueArea = getSectorArea(TOTAL_AREA, CENTRAL_AREA)

const result = `
  O tamanho da área de busca é de aproximadamente ${rescueArea.toFixed(2)}km²
`

console.log(result)
