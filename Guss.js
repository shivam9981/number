let submit = document.getElementById("submit")
var i = 0;
let x = Math.floor((Math.random() * 100));
let el = document.getElementById('lastel')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (i !== 10) {
        let num = document.getElementById("getval").value;
        if (num == '') {
            return alert("enter a number")
        }
        else {
            if (num > x) {
                document.getElementById("addval").innerText = "your number is grater"
                i++;
            }
            else if (num == x) {
                alert("congress you are winn")
                i++;
            }
            else {
                document.getElementById("addval").innerText = "your number is less then"
                i++;
            }
            console.log(i)
        }
    }
    else {
        alert("your limit is expireds")
    }
    document.getElementById('lastel').innerText = `Guess the number for ${i} chance and win the game`
})