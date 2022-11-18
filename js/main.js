
const foto = [
    {
        src: "assets/air-jordan-1-tropical.svg",
        alt: "Tropical Twist"
    },
    {
        src: "assets/air-jordan-1-mid-black-noble.svg",
        alt: "mid-black-noble"
    },
    {
        src: "assets/air-jordan-1-mid-bright.svg",
        alt: "mid-bright"
    },
    {
        src: "assets/air-jordan-1-mid-carbon.svg",
        alt: "mid-carbon"
    },
    {
        src: "assets/air-jordan-1-mid-dut-green.svg",
        alt: "mid-dut-green"
    },
    {
        src: "assets/air-jordan-1-mid-grey.svg",
        alt: "grey"
    },
    {
        src: "assets/air-jordan-1-smoke-grey.svg",
        alt: "smoke"
    },
    {
        src: "assets/air-jordan-1-retro.svg",
        alt: "retro"
    }

]


foto.forEach(foto => {
    document.querySelector(".content-main").innerHTML += `
<img src="${foto.src}" alt="${foto.alt}"></img>
`

})

