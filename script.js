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
document.body.innerHTML += `<p>4. úkol:</p>`

numbers.forEach(items => {
    if (items < 0) {
        document.body.innerHTML += ` ${items * (-1)}, `
    }
         else{document.body.innerHTML += ` ${items}, `} 
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
document.body.innerHTML += `nevim`

// 8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
document.body.innerHTML += `<p>8. úkol:</p>`
document.body.innerHTML += `nevim`

// 9. Spočítejte, kolik je v seznamu záporných čísel.
document.body.innerHTML += `<p>9. úkol:</p>`
document.body.innerHTML += `nevim`

// 10. Spočítejte součet všech čísel v poli.
console.log(numbers.join)
document.body.innerHTML +=`<p> 10. úkol: <br>  </p>`
   
// 11. Spočítejte průměr všech čísel v poli.
// 12. Spočítejte součet všech kladných čísel v poli.