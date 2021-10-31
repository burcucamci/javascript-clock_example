let Name = prompt("Adınız:")
let  myName = document.querySelector("#myName")

myName.innerHTML=`${myName.innerHTML} 
<strong style = color :red > ${Name} </strong>`

setInterval(showTime, 1000);
function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    session = "AM";
  
    if (hour > 12) {
        hour -= 12;
        session = "PM";
    }
    if (hour == 0) {
        hr = 12;
        session = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + " " + session;
  
    document.getElementById("myClock")
            .innerHTML = currentTime;
}
showTime();