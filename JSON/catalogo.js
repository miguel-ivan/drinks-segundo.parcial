async function fetching(){
    const url= window.location.search
    const urlParans= new URLSearchParams(url)
    const letter= urlParans.get("letter")|| a

    const endpoint=`https://www.thecocktaildb.com/api/json/v1/1/search/${letter}`

    const resonse = await fetch (endpoint)
    const json = await resonse.json()
    return json
}

let getInfo = () => {
    fetch(url + "&lang=es")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.drinks);
        let myDrink = data.drinks[0];
        let count = 1;
        let ingredients = [];
        for (let i in myDrink) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myDrink[i]) {
            ingredient = myDrink[i];
            if (myDrink[`strMeasure` + count]) {
              measure = myDrink[`strMeasure` + count];
            } else {
              measure = "";
            }
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        result.innerHTML = `
      <img src=${myDrink.strDrinkThumb}>
      <h2>${myDrink.strDrink}</h2>
      <h3>Ingredients:</h3>
      <ul class="ingredients"></ul>
      <h3>Instructions:</h3>
      <p>${myDrink.strInstructions}</p>
      `;
        let ingredientsCon = document.querySelector(".ingredients");
        ingredients.forEach((item) => {
          let listItem = document.createElement("li");
          listItem.innerText = item;
          ingredientsCon.appendChild(listItem);
        });
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Por favor, introduce un valor válido</h3>`;
      });
};

window.addEventListener("load", getInfo);