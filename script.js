// var div1 = document.querySelector(".div1")
var APIKey = "e435637a5f14a87e81f5614e146cda4a";
var userInput = document.querySelector(".user-input")
var searchBtn = document.querySelector("#search-button")
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


var icn = []
var dateArr = []
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=houston&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';
var requestUrl5df = 'https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=e435637a5f14a87e81f5614e146cda4a&units=imperial';


function getApi() {
  
    fetch(requestUrl)
      
        .then(function (response) {
            return response.json();
        })
      
            .then(function (data) {
                console.log(data)
                    
                var tempData = data.main.temp;
                var humData = data.main.humidity;
                var windData = data.wind.speed;
                tempVal.textContent = tempData        
                humVal.textContent = humData        
                windVal.textContent = windData    

            })
}        


function getApi1() {
  
    fetch(requestUrl5df)
      
        .then(function (response) {
            return response.json();
        })
      
            .then(function (data) {
                console.log(data)     
                
                for(var i = 0; i < data.list.length; i++){
                var x = data.list[i].dt_txt
                var y = x.split(' ')
                // console.log(x)
                // console.log(y)

                        if(y[1] === "12:00:00"){
                            const date = document.createElement('p')
                            var t = document.createTextNode(y[0])
                            date.appendChild(t)
                            console.log(date)
                            // date.textContent = y[0]
                            dateArr.push(date)

                            var img = document.createElement('img')
                            var icon = document.createAttribute('src')
                            icon.value = 'http://openweathermap.org/img/wn/'+data.list[i].weather[0].icon+'@2x.png'
                            img.setAttribute('src', icon)
                            icn.push(icon.value)


                           
                        } 
                }
// console.log(dateArr[1].innerText)
                            


                date1.textContent = dateArr[0].innerText                 
                date2.textContent = dateArr[1].innerText                 
                date3.textContent = dateArr[2].innerText                 
                date4.textContent = dateArr[3].innerText                 
                date5.textContent = dateArr[4].innerText                 
                   

                img1.setAttribute('src', icn[0])
                img2.setAttribute('src', icn[1])
                img3.setAttribute('src', icn[2])
                img4.setAttribute('src', icn[3])
                img5.setAttribute('src', icn[4])
                
              
                  })
              
              }
              
                   
              
                  // searchBtn.addEventListener("click", function(){
                  //     console.log(userInput.value)
                  // })
                  
              
              
              
                getApi()
                getApi1()
                
              
              //   API key e435637a5f14a87e81f5614e146cda4a

               
                            
                            
                    
                           
                            

                            
                                
