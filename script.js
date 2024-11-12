
let key = '2e7e9bee9b7d027565576deb654282ab'
let a = async()=>{
let inp = document.querySelector(".inp")
  if(inp.value==""){
    alert("Please Enter valid City Name ")
    return
  }
let main = document.querySelector('.main')
  main.innerHTML = ""
  let div = document.createElement("div")
  div.innerHTML = '<h3 class="h1">Fetching Weather....</h3>'
  main.appendChild(div)
 
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${key}`)
  
  let data = await response.json()
    console.log(data)
  
  
 
  div.innerHTML = `  <h3 class="h1">${data.name}</h3>
          <p class="p">${data.weather[0].main}</p>
          <p class="p">${data.weather[0].description}</p>
          <img class="img" src="https://cdn-icons-png.flaticon.com/128/414/414927.png">
          <h1>${(Math.round((data.main.temp) - 273.15))}°C</h1>
          <div class="footer">
            <div class="a">
              <p>min</p>
              <p>${(Math.round((data.main.temp_min) - 273.15))}°C</p>
            </div>
            <div class="b">
              <p>max</p>
              <p>${(Math.round((data.main.temp_min) - 273.15))}°C</p>
            </div>`
  console.log(data)
 

 
}

// deg.innerText =`${(Math.round((data.main.temp) - 273.15))}°C`

