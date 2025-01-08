function search(){
    var meal = document.getElementById("mealSearch").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    fetch(url).then(res => res.json()).then(data => process(data));
}

function process(data){
    var meals = data.meals;
    console.log(meals);
    var oldContent = document.getElementById("display");
    oldContent.textContent = "";
    for(var i=0;i<meals.length;i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `
           <img src = "${meals[i].strMealThumb}"> <br>
           Meal ID: ${meals[i].idMeal} <br>
            Meal Name: ${meals[i].strMeal} <br>
            Meal Area: ${meals[i].strArea} <br>
            Cooking Instruction: <br>
            ${meals[i].strInstructions}
        `;
        oldContent.appendChild(newDiv);
    }
}