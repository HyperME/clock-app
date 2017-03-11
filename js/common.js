 function myClock() {
     var time = new Date();
     var hours = time.getHours() % 12 || 12;
     var minutes = time.getMinutes();
     var seconds = time.getSeconds();
     
     
     var hoursDiv = document.getElementById('hours');
     var minutesDiv = document.getElementById('minutes');
     var secondsDiv = document.getElementById('seconds');
     hoursDiv.style.transform = 'rotate(' + hours*30 + 'deg)';
     minutesDiv.style.transform = 'rotate(' + minutes*6 + 'deg)';
     
     if (seconds == 0) {
          secondsDiv.style.transition = 'none';
     } else {
         secondsDiv.style.transition = 'all 1s ease';
     }
     secondsDiv.style.transform = 'rotate(' + seconds*6 + 'deg)';
     
     
     
     
 };
myClock();
setInterval(myClock, 1000);