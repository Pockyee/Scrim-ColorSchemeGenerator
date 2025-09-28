const color = document.getElementById('color')
const mode = document.getElementById('mode')
const btn = document.getElementById('btn')

document.addEventListener('click',e=>{
    if(e.target.dataset.hex){
        navigator.clipboard.writeText(e.target.dataset.hex)
    }
})

btn.addEventListener('click',()=>{
    let html = ''
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${mode.value}`)
        .then(res=>res.json())
        .then(data=>{console.log(data.colors)
            for (let color of data.colors){
                console.log(color.hex.value)
                html += `
                <div class="colorSet">
                    <div data-hex="${color.hex.value}" class="color" style="background-color: ${color.hex.value};"></div>
                    <div data-hex="${color.hex.value}" class="colorCode">${color.hex.value}</div>
                </div>`
            }
            console.log(html)
        })
        .then(()=>document.getElementById('colors').innerHTML = html)

    
})

