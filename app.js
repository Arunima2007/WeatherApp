let btn=document.querySelector(".search-btn");
let outputdiv=document.querySelector(".output-container");
let inputText=document.querySelector(".select-container input")
let locationName=document.querySelector(".output-container h2");
btn.addEventListener("click",async()=>{
    let text=inputText.value;
    if(text===""){
        return;
    }
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=3836328a15d943524dc0d35866c1d893`);
    let data=await response.json();
    console.log(data);
    outputdiv.classList.remove("hide");
    document.querySelector(".humidity p").innerText=data.main.humidity+"%"+"\n"+"Humidity";
    document.querySelector(".wind-speed p").innerText=data.wind.speed+"Km/hr"+"\n"+"Wind Speed";
    let temp=Math.floor(data.main.temp-273);
    document.querySelector(".temp-container p").innerText=temp+"℃";
    let weatherConditions=data.weather[0].main;
    let img=outputdiv.querySelector("img");
    img.src=`${weatherConditions}_img.png`;
    locationName.innerText=text[0].toUpperCase()+text.slice(1,text.length);
})

