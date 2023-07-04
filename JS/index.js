fetch('https://www.thecocktaildb.com/api/json/v1/1/search?s=margarita')
  .then(response => response.json())
  .then(data => {
    const drinks = data.drinks;
    
    drinks.forEach(drink => {
      const drinkName = drink.strDrink;
      console.log('Nombre de la bebida:', drinkName);
    });
  })
  .catch(error => console.error('Error:', error));
  
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/search?s=margarita)
  .trimEnd(response =>{
    const data =response.data;
    const drink = data.drinks;

    drinks.forEach(drink => {
        const drinkName = drink.strDrink;
        console.log('Nombre de la bebida::' drinkName)

    })
  })
.catch(error => console. error('Error:' error));
