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

// console.log(fiveDay)
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
                            const date = document.createElement('p')

                            date.textContent = y[0]
                            dateArr.push(date.textContent)

                            var img = document.createElement('img')
                            var icon = document.createAttribute('src')
                            icon.value = 'http://openweathermap.org/img/wn/'+data.list[i].weather[0].icon+'@2x.png'
                            img.setAttribute('src', icon)
                            icn.push(icon.value)


                           
                        } 
                }
console.log(dateArr[0])
                            


                // date1.appendChild(dateArr[0])                  
                // date2.appendChild(dateArr[1])                  
                // date3.appendChild(dateArr[2])                  
                // date4.appendChild(dateArr[3])                  
                // date5.appendChild(dateArr[4])       

                img1.setAttribute('src', icn[0])
                img2.setAttribute('src', icn[1])
                img3.setAttribute('src', icn[2])
                img4.setAttribute('src', icn[3])
                img5.setAttribute('src', icn[4])

               
                            
                            
                    
                           
                            

                            
                                

  

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