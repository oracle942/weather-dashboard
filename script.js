// var div1 = document.querySelector(".div1")
var APIKey = "e435637a5f14a87e81f5614e146cda4a";
var userInput = document.querySelector(".user-input")
var searchBtn = document.querySelector("#search-button")
var tempVal = document.querySelector(".temp")
var windVal = document.querySelector(".wind")
var humVal = document.querySelector(".humidity")
var uvVal = document.querySelector(".uv")
var date1 = document.getElementById("date1")
var date2 = document.getElementById("date2")
var date3 = document.getElementById("date3")
var date4 = document.getElementById("date4")
var date5 = document.getElementById("date5")


var arr = []
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=houston&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';
var requestUrl5df = 'https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';
function getApi() {
  
    fetch(requestUrl5df)
      
        .then(function (response) {
            return response.json();
        })
      
            .then(function (data) {
                console.log(data)
                // console.log(data.list[0].dt_txt)
                    
                // var tempData = data.main.temp;
                // var humData = data.main.humidity;
                // var windData = data.wind.speed;
                // tempVal.textContent = tempData        
                // humVal.textContent = humData        
                // windVal.textContent = windData        
                // 
                for(var i = 0; i < data.list.length; i++){
                var x = data.list[i].dt_txt
                var y = x.split(' ')
                // console.log(x)
                // console.log(y)

                        if(y[1] === "12:00:00"){
        
                            var icon = document.createAttribute('src')
                            icon.value = 'http://openweathermap.org/img/wn/'+data.list[i].weather[0].icon+'@2x.png'
                            arr.push(icon.value)
                            console.log(arr)
                            
                        } 
                }
                date1.setAttribute('src', arr[0])
                date2.setAttribute('src', arr[1])
                date3.setAttribute('src', arr[2])
                date4.setAttribute('src', arr[3])
                date5.setAttribute('src', arr[4])
                            
                            
                    
                           
                            

                            
                                

  

    })

}

    // var xhr = new XMLHttpRequest("https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial");
    // xhr.onreadystatechange = function () {

    //   if (xhr.readyState === XMLHttpRequest.DONE) {
    //     console.log('XMLHttpRequest Response \n-------------');
    //     console.log(xhr.response);
    //     }
    // }
    // xhr.open('GET', requestUrl5df);
    //     xhr.send();
    

    // searchBtn.addEventListener("click", function(){
    //     console.log(userInput.value)
    // })
    



  getApi()
//   getApi1()
  

//   API key e435637a5f14a87e81f5614e146cda4a