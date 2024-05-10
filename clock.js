const time = () =>{
    let date = new Date();
    let hour = document.querySelector("#hour")
    let minute = document.querySelector("#minute")
   
    
    let session = document.querySelector("#session")
    let second = document.querySelector("#second").innerHTML = date.getSeconds();
    if(second.innerHTML < 10){
        second.innerHTML = "0" + second.innerHTML
    }

    hour.innerHTML = date.getHours();
    if(hour.innerHTML >= 12){
        hour.innerHTML = hour.innerHTML - 12
        hour.innerHTML = "0" + hour.innerHTML
        session.innerHTML = "PM"
    }
    minute.innerHTML = date.getMinutes();
    if(minute.innerHTML < 10){
        minute.innerHTML = "0" + minute.innerHTML
    }
    
   
   
      
}


setInterval(time, 1000);