// var div1 = document.querySelector(".div1")
var APIKey = "e435637a5f14a87e81f5614e146cda4a";
var userInput = document.querySelector(".user-input")
var searchBtn = document.querySelector("#search-button")
var tempVal = document.querySelector(".temp")
var windVal = document.querySelector(".wind")
var humVal = document.querySelector(".humidity")
var uvVal = document.querySelector(".uv")

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=houston&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';
  
    fetch(requestUrl)
      
    .then(function (response) {
        return response.json();
      })
      
    .then(function (data) {
        
              
        var tempData = data.main.temp;
        var humData = data.main.humidity;
        var windData = data.wind.speed;
        tempVal.textContent = tempData        
        humVal.textContent = humData        
        windVal.textContent = windData        
          
        console.log(data)
        console.log(tempData)
  
      });
  }

    searchBtn.addEventListener("click", function(){
    console.log(userInput.value)})



  getApi()
  

//   API key e435637a5f14a87e81f5614e146cda4a