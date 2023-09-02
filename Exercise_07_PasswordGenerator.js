console.log("Starting")
let btn = document.getElementById("btn_1")
let btn_2 = document.getElementById("btn_2")
let btn_3 = document.getElementById("btn")
var containers = document.getElementById("containers")


// Copy function
const CopyText=()=> {
    containers.select();
    navigator.clipboard.writeText(containers.value);
  
    // Alert the copied text
    alert("Copied the text: " + containers.value);
  }

// GenerateStrongPassword

btn.addEventListener("click", () => {

    let password = ""
    // let random_things = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$"
    let ab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "1234567890"
    let special = "!@#$%^&*()*+,-./:;<=>?@"
    for (let i = 0; i <= 3; i++) {
        // let random_number = Math.floor(Math.random() * random_things.length)
        // password += random_things.charAt(random_number)
        password += ab[Math.floor(Math.random() * ab.length)]
        password += number[Math.floor(Math.random() * number.length)]
        password += special[Math.floor(Math.random() * special.length)]
        password = password.substring(0,10)
        // containers.innerHTML = password
        containers.value = password
    }
})

// WeakStrongPassword

btn_2.addEventListener("click", () => {

    let password = ""
    let random_thing = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i <= 10; i++) {
        let random_number = Math.floor(Math.random() * random_thing.length)
        password += random_thing.charAt(random_number)
        // containers.innerHTML = password
        containers.value = password
    }
})

// Funny password

const funny_passwords = () => {
    let random_things = ["Password", "Easy Password", "Very Hard Password", "Very Hard Password hai", 'I_Forgotten Password']
    let random_number = Math.floor(Math.random() * random_things.length)
    let password = random_things[random_number]
    // containers.innerHTML = password
    containers.value = password
}
