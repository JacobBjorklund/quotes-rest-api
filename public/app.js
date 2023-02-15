fetchapi()

async function fetchapi() {
    const res = await fetch('api/quote')
    let data = await res.json()
    console.log(data);
    document.querySelector('#parent').innerHTML = `
        <h1>"${data.quote} "</h1>
        <div id="center">
       <div id="lines"> </div><p> ${data.author}</p><div id="lines"> </div>
       </div>
    `
}