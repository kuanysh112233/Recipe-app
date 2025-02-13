let container = document.querySelector('.card')

let AllMeels = [];

async function FetchMeels() {
    try{
        let response = await fetch('meals.json')
        let date = await response.json()
        
        console.log(date);
        
        date.meals.forEach(function(meal){
            let div = document.createElement('div')
            div.className = 'card'
    
            div.innerHTML=`
            <img src="${meal.strMealThumb}" alt="recipeimg"/>
            <p>${meal.strMeal}</p>
            <h4>${meal.strInstructions}</h4>
            <p>${meal.strTime}</p>
            `
            
            container.appendChild(div)
        });
    }catch(error){
        console.error('Тағамдарды алу кезінде қате орын алды: ', error)
    }

}
FetchMeels()
    
