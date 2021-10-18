var yaricap;
function hesapla() {
    alan = (Math.PI * (yaricap * yaricap))
    cevre = (Math.PI * 2 * yaricap);
    console.log(`yarıçapı ${yaricap} olan dairenin alanı : ${alan} cevresi: ${cevre}`);
}

hesapla(yaricap = process.argv.slice(2))

