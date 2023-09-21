let count = 0

const button1 = document.getElementById("button1")
button1.addEventListener("click", () => {
    setInterval( () => {
        count++
        document.write(count);
    }, 1000);
})
const button2 = document.getElementById("button2")
button2.addEventListener("click", () => {
})