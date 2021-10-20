
function circleArea(yaricap) {
    alan = (Math.PI * (yaricap * yaricap))
    console.log(`Yazdır ${alan}`)
}

function circleCircumference(yaricap) {
    cevre = (Math.PI * 2 * yaricap);
    console.log(`Yazdır ${cevre}`)
}

module.exports = {
    circleArea,
    circleCircumference
}