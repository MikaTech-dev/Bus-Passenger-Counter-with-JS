// Learnt a new way to call fucntions which is calling them straight from html using an onclick atrribute as an eventlistener and calling the js function within the html
function increment() {
    let passengers = document.getElementById('passengerCount').value
    if (passengers === 'none') {
        for (let i = 1; i===0; break)
        let confirmation = prompt ('Are you ready to begin your day?')
        if (confirmation.trim === yes || y || yeah) {
            document.getElementById('passengerCount').textContent = 0
            let actualContent = document.getElementById('passengerCount').textContent
            actualContent++
        }else {
            alert ('Invalid entry.')
        }
    }
}