
let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp") ;
let API_key = `74e5f34380b04e8f8cee571f03ea9ec3`;

const data = async function(search){
   let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
   console.log(getData);
   let jsonData =await getData.json();
   console.log(jsonData);
   console.log(jsonData.name);

   if(jsonData.cod == 400){
       alert("Please Enter Location")
       image.src="error1.png";
       city.innerHTML="";
       temp.innerHTML="";
       type.innerHTML="";
   }
   if(jsonData.cod == 404){
       alert("Please Enter Write Location")
       image.src="error2.png";
       city.innerHTML=search;
       temp.innerHTML="";
       type.innerHTML="";
   }
   city.innerHTML=search;
   temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
   type.innerHTML=jsonData.weather[0].main;

   if (type.innerHTML === "Clouds") {
    // image.src = "Clouds.png";
    image.src = "./Img/Clouds.png";
} else if (type.innerHTML === "Clear") {
    // image.src = "clears.png";
    image.src = "./Img/clears.png";
} else if (type.innerHTML === "Rain") {
    // image.src = "rain.png";
    image.src = "./Img/rain.png";
} else if (type.innerHTML === "Snow") {
    // image.src = "snow.png";
    image.src = "./Img/snow.png";
} else if (type.innerHTML === "Haze") {
    // image.src = "haze.png";
    image.src = "./Img/haze.png.";
} else if (type.innerHTML === "Storm") {
    // image.src = "storm.png";
    image.src = "./Img/storm.png";
}else if (type.innerHTML == "Smoke") {
    // image.src = "smoke.png";
    image.src = "./Img/smoke.jpeg";
    
}
   input.value=""
}



function myFun(event) {
    event.preventDefault(); // Prevent the default form submission
    const search = input.value;
    data(search);
  }














