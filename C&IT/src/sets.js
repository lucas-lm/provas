const A = "Yoshi's Island"
const B = "Chocolate Island"
const C = "Cookie Mountain"

const yoshiesLikes = [
  { A: 450, B: 330, C: 340, },
  { AB: 200, AC: 180, BC: 100 },
  { ABC: 30 },
  1000
]

const parseResearch = likes => {
  const [likesOne, likesTwo, likesTrhree, total ] = likes

  // Separa os conjuntos que gostam de apenas 2 dos que gostam de todos
  const onlyLikesTwo = {total: 0}
  Object.keys(likesTwo).forEach(k => {
    onlyLikesTwo[k] = likesTwo[k] - likesTrhree['ABC']
    onlyLikesTwo.total += onlyLikesTwo[k]
  })

  // Separa os conjuntos que gostam de apenas 1 dos que gostam de apenas 2
  const onlyLikesOne = {total: 0} 
  Object.keys(likesOne).forEach(likesOneKey => {
    const subSet = Object.keys(onlyLikesTwo)
      .filter(onlyLikesTwoKey => onlyLikesTwoKey.includes(likesOneKey))
      .reduce((previousValue, filteredKey) => onlyLikesTwo[filteredKey] + previousValue, likesTrhree['ABC'])
    
    onlyLikesOne[likesOneKey] = likesOne[likesOneKey] - subSet
    onlyLikesOne.total += onlyLikesOne[likesOneKey]
  })

  const likesNone = total - onlyLikesOne.total - onlyLikesTwo.total - likesTrhree['ABC']

  return {...onlyLikesOne, none: likesNone, total}
}

const result = parseResearch(yoshiesLikes)

const ans = `
  De um total de ${result.total} Yoshis entrevistados:
  - ${result.A} gostam de viver apenas em ${A}
  - ${result.B} gostam de viver apenas em ${B}
  - ${result.C} gostam de viver apenas em ${C}
  - No total, ${result.A + result.B + result.C} Yoshis gostam de viver em apenas uma localidade
  - ${result.none} não gostam de nenhuma dessas localidades
`
console.log(ans)

