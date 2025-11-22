import data from "./data.json" with{type:"json"};

let daily=document.getElementById("daily");
let weekly=document.getElementById("weekly");
let monthly=document.getElementById("monthly");

let workC=document.getElementById("work-current");
let workP=document.getElementById("work-previous");
let playC=document.getElementById("play-current")
let playP=document.getElementById("play-previous")
let studyC=document.getElementById("study-current")
let studyP=document.getElementById("study-previous")
let exerciseC=document.getElementById("exercise-current")
let exerciseP=document.getElementById("exercise-previous")
let socialC=document.getElementById("social-current")
let socialP=document.getElementById("social-previous")
let careC=document.getElementById("care-current")
let careP=document.getElementById("care-previous")

console.log(data[1])

daily.addEventListener("click", function(){
    workC.innerText= data[0].timeframes.daily.current+"Hrs";
    workP.innerText= "Yesterday - " + data[0].timeframes.daily.previous+"hrs";
    playC.innerText= data[1].timeframes.daily.current+"Hrs";
    playP.innerText= "Yesterday - " + data[1].timeframes.daily.previous+"hrs";
    studyC.innerText= data[2].timeframes.daily.current+"Hrs";
    studyP.innerText= "Yesterday - " + data[2].timeframes.daily.previous+"hrs";
    exerciseC.innerText= data[3].timeframes.daily.current+"Hrs";
    exerciseP.innerText= "Yesterday - " + data[3].timeframes.daily.previous+"hrs";
    socialC.innerText= data[4].timeframes.daily.current+"Hrs";
    socialP.innerText= "Yesterday - " + data[4].timeframes.daily.previous+"hrs";
    careC.innerText= data[5].timeframes.daily.current+"Hrs";
    careP.innerText= "Yesterday - " + data[5].timeframes.daily.previous+"hrs";
    daily.style.color='white'
    weekly.style.color='hsl(235, 45%, 61%)'
    monthly.style.color='hsl(235, 45%, 61%)'
})

weekly.addEventListener("click", function(){
    workC.innerText= data[0].timeframes.weekly.current+"Hrs";
    workP.innerText= "Last week - " + data[0].timeframes.weekly.previous+"hrs";
    playC.innerText= data[1].timeframes.weekly.current+"Hrs";
    playP.innerText= "Last week - " + data[1].timeframes.weekly.previous+"hrs";
    studyC.innerText= data[2].timeframes.weekly.current+"Hrs";
    studyP.innerText= "Last week - " + data[2].timeframes.weekly.previous+"hrs";
    exerciseC.innerText= data[3].timeframes.weekly.current+"Hrs";
    exerciseP.innerText= "Last week - " + data[3].timeframes.weekly.previous+"hrs";
    socialC.innerText= data[4].timeframes.weekly.current+"Hrs";
    socialP.innerText= "Last week - " + data[4].timeframes.weekly.previous+"hrs";
    careC.innerText= data[5].timeframes.weekly.current+"Hrs";
    careP.innerText= "Last week - " + data[5].timeframes.weekly.previous+"hrs";
    weekly.style.color='white'
    monthly.style.color='hsl(235, 45%, 61%)'
    daily.style.color='hsl(235, 45%, 61%)'
})

monthly.addEventListener("click", function(){
    workC.innerText= data[0].timeframes.monthly.current+"Hrs";
    workP.innerText= "Last month - " + data[0].timeframes.monthly.previous+"hrs";
    playC.innerText= data[1].timeframes.monthly.current+"Hrs";
    playP.innerText= "Last month - " + data[1].timeframes.monthly.previous+"hrs";
    studyC.innerText= data[2].timeframes.monthly.current+"Hrs";
    studyP.innerText= "Last month - " + data[2].timeframes.monthly.previous+"hrs";
    exerciseC.innerText= data[3].timeframes.monthly.current+"Hrs";
    exerciseP.innerText= "Last month - " + data[3].timeframes.monthly.previous+"hrs";
    socialC.innerText= data[4].timeframes.monthly.current+"Hrs";
    socialP.innerText= "Last month - " + data[4].timeframes.monthly.previous+"hrs";
    careC.innerText= data[5].timeframes.monthly.current+"Hrs";
    careP.innerText= "Last month - " + data[5].timeframes.monthly.previous+"hrs";
    monthly.style.color='white'
    weekly.style.color='hsl(235, 45%, 61%)'
    daily.style.color='hsl(235, 45%, 61%)'
})

