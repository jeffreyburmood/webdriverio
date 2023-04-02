var inputField = document.querySelector("#content > div > div > div > input[type=number]")
if (inputField.value === "500") {
    console.log("input is 500")
} else {
    var value = inputField.value
    console.log('input is ${value}')
}

var links = document.querySelectorAll("#content > ul > li > a")

for (let i=0; i < links.length; i++) {
    console.log('This is the ' + links[i].innerHTML + ' link')
}