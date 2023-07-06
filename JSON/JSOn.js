let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let userInp = document.getElementById("user-inp");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

let getInfo = () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3 class="msg">El campo de entrada no puede estar vacío</h3>`;
  } else {
    fetch(url + userInp +"&lang=es")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("user-inp").value = "";
        console.log(data.drinks[0]);
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
  }
};

userInp.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getInfo();
  }
});


window.addEventListener("load", getInfo);
searchBtn.addEventListener("click", getInfo);
    