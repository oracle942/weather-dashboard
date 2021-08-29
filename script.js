// var div1 = document.querySelector(".div1")
var APIKey = "e435637a5f14a87e81f5614e146cda4a";

var userInput = document.querySelector(".user-input")
var cityName = document.querySelector(".city-name")
var  searchBtn= document.querySelector("#search-button")
var  austin= document.querySelector("#Austin")
var  chicago= document.querySelector("#Chicago")
var  newYork= document.querySelector("#New-York")
var  orlando= document.querySelector("#Orlando")
var  sanFrancisco= document.querySelector("#San-Francisco")
var  seattle= document.querySelector("#Seattle")
var  denver= document.querySelector("#Denver")
var  atlanta= document.querySelector("#Atlanta")

var tempVal = document.querySelector(".temp")
var windVal = document.querySelector(".wind")
var humVal = document.querySelector(".humidity")
var uvVal = document.querySelector(".uv")
var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var date1 = document.querySelector(".date1")
var date2 = document.querySelector(".date2")
var date3 = document.querySelector(".date3")
var date4 = document.querySelector(".date4")
var date5 = document.querySelector(".date5")
var temp1 = document.querySelector(".temp1")
var temp2 = document.querySelector(".temp2")
var temp3 = document.querySelector(".temp3")
var temp4 = document.querySelector(".temp4")
var temp5 = document.querySelector(".temp5")
var wind1 = document.querySelector(".wind1")
var wind2 = document.querySelector(".wind2")
var wind3 = document.querySelector(".wind3")
var wind4 = document.querySelector(".wind4")
var wind5 = document.querySelector(".wind5")
var hum1 = document.querySelector(".hum1")
var hum2 = document.querySelector(".hum2")
var hum3 = document.querySelector(".hum3")
var hum4 = document.querySelector(".hum4")
var hum5 = document.querySelector(".hum5")


var icnArr = []
var dateArr = []
var tempArr = []
var windArr = []
var humArr = []
let city
var requestUrl
var requestUrl5df
var oneCallApi
var coord
var lon
var lat



function getApi() {
    requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';
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
                coord = data.coord
                lon = coord.lon
                lat = coord.lat  
                console.log(lat)
            })

}        

function getOneCall() {
        console.log(lat)
        oneCallApi = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid=e435637a5f14a87e81f5614e146cda4a'
        fetch(oneCallApi)
      
        .then(function (response) {
            return response.json();
        })
      
            .then(function (data) {
                    console.log(data)
            })
    
        console.log(lon)

}







function getApi1() {
    requestUrl5df = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';

  
    fetch(requestUrl5df)
      
        .then(function (response) {
            return response.json();
        })
      
            .then(function (data) {
                console.log(data)
                for(var i = 0; i < data.list.length; i++){
                var x = data.list[i].dt_txt
                var y = x.split(' ')

                var tempData = data.list[i].main.temp
                var windData = data.list[i].wind.speed
                var humData = data.list[i].main.humidity
            //    console.log(tempData)

                        if(y[1] === "12:00:00"){
                            const date = document.createElement('p')
                            var node = document.createTextNode(y[0])
                            date.appendChild(node)
                            dateArr.push(date)

                            const temp = document.createElement('p')
                            temp.textContent = tempData
                            tempArr.push(temp)

                            const wind = document.createElement('p')
                            wind.textContent = windData
                            windArr.push(wind)

                            const hum = document.createElement('p')
                            hum.textContent = humData
                            humArr.push(hum)
                            


                            var img = document.createElement('img')
                            var icon = document.createAttribute('src')
                            icon.value = 'http://openweathermap.org/img/wn/'+data.list[i].weather[0].icon+'@2x.png'
                            img.setAttribute('src', icon)
                            icnArr.push(icon.value)
                            
                         } 
                 }
                            
        

                
                date1.textContent = dateArr[0].innerText                 
                date3.textContent = dateArr[1].innerText                 
                date2.textContent = dateArr[2].innerText                 
                date4.textContent = dateArr[3].innerText                 
                date5.textContent = dateArr[4].innerText 
                
                temp1.textContent = "Temp: " + tempArr[0].innerText
                temp2.textContent = "Temp: " + tempArr[1].innerText
                temp3.textContent = "Temp: " + tempArr[2].innerText
                temp4.textContent = "Temp: " + tempArr[3].innerText
                temp5.textContent = "Temp: " + tempArr[4].innerText
                   
                wind1.textContent = "Wind: " + windArr[0].innerText
                wind2.textContent = "Wind: " + windArr[1].innerText
                wind3.textContent = "Wind: " + windArr[2].innerText
                wind4.textContent = "Wind: " + windArr[3].innerText
                wind5.textContent = "Wind: " + windArr[4].innerText
                   
                hum1.textContent = "Humidity: " + humArr[0].innerText
                hum2.textContent = "Humidity: " + humArr[1].innerText
                hum3.textContent = "Humidity: " + humArr[2].innerText
                hum4.textContent = "Humidity: " + humArr[3].innerText
                hum5.textContent = "Humidity: " + humArr[4].innerText
                   

                img1.setAttribute('src', icnArr[0])
                img2.setAttribute('src', icnArr[1])
                img3.setAttribute('src', icnArr[2])
                img4.setAttribute('src', icnArr[3])
                img5.setAttribute('src', icnArr[4])
                
              
                  })
              
              }
              
 
                
                searchBtn.addEventListener("click", function(){
                    city = userInput.value.toUpperCase() 
                    cityName.textContent= city

                    // fetch(oneCallApi)
      
                    // .then(function (response) {
                    //     return response.json();
                    // })
                  
                    //     .then(function (data) {
                          
                    //     })
                    getApi()
                    getApi1()
                    getOneCall()
                     return
                })
                austin.addEventListener("click", function(){
                    city = "Austin" 
                    cityName.textContent = city
                    getApi()
                    getApi1()
                    getOneCall()

                })
                chicago.addEventListener("click", function(){
                city = "Chicago" 
                cityName.textContent = city
                getApi()
                getApi1()
                getOneCall()

                })  
                newYork.addEventListener("click", function(){
                    city = "New York" 
                cityName.textContent = city
                getApi()
                getApi1()
                getOneCall()

                })
                orlando.addEventListener("click", function(){
                    city = "Orlando" 
                cityName.textContent = city
                getApi()
                getApi1()
                getOneCall()

                })
                sanFrancisco.addEventListener("click", function(){
                    city = "San Francisco" 
                cityName.textContent = city
                getApi()
                getApi1()
                getOneCall()

                })
                seattle.addEventListener("click", function(){
                    city = "Seattle" 
                cityName.textContent = city
                getApi()
                getApi1()
                getOneCall()

                })
                denver.addEventListener("click", function(){
                    city = "Denver" 
                cityName.textContent = city
                getApi()
                getApi1()
                getOneCall()

                })
                atlanta.addEventListener("click", function(){
                    city = "Atlanta" 
                cityName.textContent = city
                getApi()
                getApi1()
                getOneCall()

                })
                
                
                
              //   API key e435637a5f14a87e81f5614e146cda4a

               
                            
                            
                    
                           
                            

                            
                                
