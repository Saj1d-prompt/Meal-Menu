function search(){
    var meal = document.getElementById("mealSearch").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    fetch(url).then(res => res.json()).then(data => console.log(data));
}