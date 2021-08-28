// var div1 = document.querySelector(".div1")
var APIKey = "e435637a5f14a87e81f5614e146cda4a";
var userInput = document.querySelector(".user-input")
var searchBtn = document.querySelector("#search-button")


function getApi() {
    var requestUrl = 'https://api.github.com/users/oracle942/repos';
  
    fetch(requestUrl)
      
    .then(function (response) {
        return response.json();
      })
      
    .then(function (data) {
        console.log(data)
        // for (var i = 0; i < data.length; i++) {
        //     var listItem = document.createElement("h1");
        //     listItem.textContent = data[i].name
        //     div1.appendChild(listItem)

        //   }
      });
  }

    searchBtn.addEventListener("click", function(){
    console.log(userInput.value)})



  getApi()
  

//   API key e435637a5f14a87e81f5614e146cda4a