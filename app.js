const newYear = new Date(2023,1,1,0,0,0,0).getTime()
const dayspan = document.querySelector(".daySpan")
const hourSpan = document.querySelector(".hoursSpan")
const minSpan = document.querySelector(".minSpan")
const secSpan = document.querySelector(".secSpan")

function renderTime(){
   const today = new Date().getTime()
   const timeRemain = newYear - today

   const sec = 1000 
   const min = sec * 60 
   const hour = min * 60
   const day = hour * 24

   dayspan.innerHTML = Math.round(timeRemain / (day)) 
   hourSpan.innerHTML = Math.round( (timeRemain % day) / (hour))
   minSpan.innerHTML = Math.round( (timeRemain % hour) / (min) )
   secSpan.innerHTML =Math.round( (timeRemain % min) / (sec)  )
}

setInterval(renderTime,1000)
