if (document.cookie=="evil=cookie"){
    console.log('Found the evil cookie from last session')
}

if (window.localStorage.getItem('Evil') === "Very Evil"){
    console.log("Detected a local storage super cookie from past session");
}
else {
    console.log("Local Storage Super Cookie not set");
}

window.localStorage.setItem("Evil","Very Evil")
if (window.localStorage.getItem('Evil') === "Very Evil"){
    console.log("Set a local storage super cookie");
}
else {
    console.log("Could not set a local storage super cookie");
}

document.cookie = 'evil=cookie'

console.log(document.cookie)
if (document.cookie=="evil=cookie"){
    console.log('Found the evil cookie from this session')
}
