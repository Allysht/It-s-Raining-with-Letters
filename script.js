function createSnowflake() {
    const snowflake = document.createElement('div')

    const data = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    for (let i = 0; i < data.length; i++) {
        snowflake.innerText = data[Math.floor(Math.random() * i)]
    }

    snowflake.classList.add('snowflake')

    snowflake.style.left = Math.random() * 200 + "vh"
    snowflake.style.animationDuration = Math.random() * 2 + 3 + "s"

    document.body.appendChild(snowflake)

    setTimeout(() => {
        snowflake.remove()
    }, 5000)
}

setInterval(createSnowflake, 1)