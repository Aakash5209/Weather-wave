// const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= + ${cty}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '643246f54fmsha95b1ec54f74770p172735jsn1c09b3df715d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
var cty='Delhi';
const inputTag = document.getElementById("input-tag");
    const btn = document.getElementById("btn-Search");
    const weather = document.getElementById("weather-report");

   
    const getWeather = async(cty) => {
      weather.innerHTML="<h2>Loading.....</h2>"
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cty, options);//api
        const result = await response.json();
      //   console.log(result);
       return showWeather(result);
     }

     const showWeather = (data)=> {
      
      // if(data.cod == "404"){
      if(data.temp ==undefined){  
         alert('enter the corrcet city');
         weather.innerHTML ='<h2>Data not found</h2>'
         return;
      }
      
         weather.innerHTML =`<h2>${cty}</h2>
         <img src="img/download.png" alt="">
         <h3>${data.temp}℃</h3>`
     
        

     }

     btn.addEventListener('click', function search() {
        cty=inputTag.value;
      //   console.log(inputTag.value);
        getWeather(inputTag.value);
     })
     getWeather(cty);
     
    