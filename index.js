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
    var newDiv = document.createElement("div");
    var counter = 0;
    for(var i=0;i<meals.length;i++){
        if(counter<5){
            
            newDiv.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${meals[i].strMealThumb}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Meal Name: ${meals[i].strMeal}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Meal ID: ${meals[i].idMeal}</h6>
                        <p class="card-text">Meal Area: ${meals[i].strArea}</p>
                        <p class="card-text">Cooking Instruction</p>
                        <p class="card-text">${meals[i].strInstructions}</p>
                    </div>
                </div>

            
            `;
            oldContent.appendChild(newDiv);

            counter+=1;
        }
        else{
            break;
        }
        document.getElementById("more").innerHTML=`<button type="button" class="btn btn-info" onclick="showAll()">Show All</button>`;
    }
}

