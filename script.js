const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

// 1. Vypište do stránky všechna čísla.
document.body.innerHTML =`<p> 1. úkol: <br> ${numbers} </p>`

// 2. Vypište do stránky druhé mocniny všech čísel.
 const naDruhou = numbers.map(items => items * items
 )
 document.body.innerHTML +=`<p> 2. úkol: <br> ${naDruhou} </p>`

// 3. Vypište do stránky pouze záporná čísla.
document.body.innerHTML += `<p>3. úkol:</p>`
numbers.forEach(items => {
    if (items < 0) {
        document.body.innerHTML += ` ${items},`
    }
         else{} })

// 4. Vypište do stránky absolutní hodnotu všech čísel.
document.body.innerHTML += `<p>4. úkol poprve:</p>`

numbers.forEach(items => {
    if (items < 0) {
        document.body.innerHTML += ` ${items * (-1)}, `
    }
         else{document.body.innerHTML += ` ${items}, `} 
        })

document.body.innerHTML += `<p>4. úkol podruhe:</p>`
numbers.forEach(items => {
    document.body.innerHTML += ` ${Math.abs(items)}, `
})

// 5. Vypište do stránky pouze sudá čísla.
document.body.innerHTML += `<p>5. úkol:</p>`
numbers.forEach(items => {
    if (items % 2 === 0) {
        document.body.innerHTML += ` ${items},`
    }
         else{} })
// 6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
document.body.innerHTML += `<p>6. úkol:</p>`
numbers.forEach(items => {
    if (items % 3 === 0) {
        document.body.innerHTML += ` ${items},`
    }
         else{} })

// 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
document.body.innerHTML += `<p>7. úkol:</p>`
const vzdalenost = numbers.map(function(items) {
    return Math.abs(items - 5)
})
document.body.innerHTML += ` ${(vzdalenost)}`

// 8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
document.body.innerHTML += `<p>8. úkol:</p>`
const vzdalenost2 = numbers.map(function(items) {
    return ((items - 5) * (items - 5))
})
document.body.innerHTML += ` ${(vzdalenost2)}`

// 9. Spočítejte, kolik je v seznamu záporných čísel.
document.body.innerHTML += `<p>9. úkol:</p>`
let pocitadlo = 0
numbers.forEach(items => {
    if (items < 0) {
        pocitadlo++
    }
         else{} })
document.body.innerHTML += pocitadlo

// 10. Spočítejte soucet všech čísel v poli.
document.body.innerHTML += `<p>10. úkol:</p>`
let soucet = 0
numbers.forEach(items => {
soucet += items })
document.body.innerHTML += `${soucet}`


// 11. Spočítejte průměr všech čísel v poli.
document.body.innerHTML += `<p>11. úkol:</p>`
const pocetPozic = numbers.length
let prumer = soucet / pocetPozic
document.body.innerHTML += `${prumer}`

// 12. Spočítejte součet všech kladných čísel v poli.
document.body.innerHTML += `<p>12. úkol:</p>`

const kladnePole = numbers.map(item => {
    if (item > 0) {
        return item
    }
})

let soucetKladnych = 0
kladnePole.forEach(item => {
    if (item != undefined) {
    soucetKladnych += item }})
document.body.innerHTML += `${soucetKladnych}`
