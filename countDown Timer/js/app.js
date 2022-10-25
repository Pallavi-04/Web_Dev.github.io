const endDate = "October 25 2022  06:31:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
// const clock = () => { 

//}

function clock() {
  const end = new Date(endDate);   //forming the milliseconds of endD  ate , storing into end
  const now = new Date();         //forming the milliseconds of now

  const diff = (end - now) / 1000;  // ms to sec -> divide by 1000
  // console.log(diff);     //diff b/w two dates in milliseconds
  //console.log(Math.floor(diff / 3600 / 24));

  if (diff < 0) return;

  //convert into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //convert into hrs
  inputs[1].value = Math.floor(diff / 3600) % 24;
  //convert into minutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  //convert into seconds
  inputs[3].value = Math.floor(diff % 60);


  console.log(end);
  console.log(now);
}

//initial call
clock()

/*
  1 day = 24 hrs
  1 hr = 60 min
  60 min = 3600 sec
*/

setInterval(
  () => {
    clock()
  },
  1000
)