fetchapi()

async function fetchapi() {
    const res = await fetch('api/quote')
    let data = await res.json()
    let quotearray = data.map(quotes => quotes.quote)
    let randomquote = quotearray[Math.floor(Math.random() * quotearray.length)]
    let authorarray = data.map(quotes => quotes.author)
    let randomauthor = authorarray[Math.floor(Math.random() * authorarray.length)]
    console.log(data);
    document.querySelector('#parent').innerHTML = `
        <h1>${randomquote}</h1>
        <p> ${randomauthor}</p>
    `
}