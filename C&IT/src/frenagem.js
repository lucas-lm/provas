const braking = (speed, mi=1) => (speed * speed)/ (250 * mi)

const distance = braking(260, 1)

const result = `A reta final precisaria ter ${distance} metros para que eu consiga frear completamente o veículo.`

console.log(result)
