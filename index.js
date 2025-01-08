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
           <img src = "${meals[i].strMealThumb}"> 
        `;
        oldContent.appendChild(newDiv);
    }
}