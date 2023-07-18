async function fetching(){
    const url= window.location.search
    const urlParans= new URLSearchParams(url)
    const letter= urlParans.get("letter")|| "a"

    const endpoint=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`

    const resonse = await fetch (endpoint)
    const json = await resonse.json()
    return json
}
fetching().then(
  response => {
    const drinks = response.drinks
    let template = ''
    drinks.forEach(drink => {
      template += `
      <div class="results">
      <img src=${drink.strDrinkThumb}>
      <h2>${drink.strDrink}</h2>
      </div>
      `
    })
    results.innerHTML = template
  }
)

