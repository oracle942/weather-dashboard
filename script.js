// var div1 = document.querySelector(".div1")
var APIKey = "e435637a5f14a87e81f5614e146cda4a";
var userInput = document.querySelector(".user-input")
var searchBtn = document.querySelector("#search-button")


function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';
  
    fetch(requestUrl)
      
    .then(function (response) {
        return response.json();
      })
      
    .then(function (data) {
        
              
        var temp = data.main.temp;
                   
          
        console.log(data)
        console.log(x)
  
      });
  }

    searchBtn.addEventListener("click", function(){
    console.log(userInput.value)})



  getApi()
  

//   API key e435637a5f14a87e81f5614e146cda4a