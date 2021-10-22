const fs = require('fs')

const path = './json'

if (fs.existsSync(path)) {
    console.log("Dosya hali hazırda var")

} else {

    fs.mkdir('./json', (err) => {
        if (err) console.log(err)
        console.log("Dosya oluşturuldu")
    })
}

fs.writeFile('./json/employee.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) console.log(err)
    console.log("dosya yazdırıldı")
})

fs.readFile('./json/employee.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
})
fs.appendFile('./json/employee.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) console.log(err)
    console.log("basarıyla güncellendi")

})

fs.rmdir('./json', {
    recursive: true
}, (err) => {
    if (err) console.log(err)
    console.log("dosyalar silindi")
})