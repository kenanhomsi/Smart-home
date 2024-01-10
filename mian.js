var video=document.querySelector("video");
var how_it_work=document.getElementById("video_text");
console.log(how_it_work);
function videoControl(){
    video.setAttribute("controls","controls");
    how_it_work.style.display="none";
}

var alarm=document.getElementById("alarm");
var door=document.getElementById("door");
var living_spot=document.getElementById("living_spot");
var gard_left_spot=document.getElementById("gard_left_spot");
var gard_right_spot=document.getElementById("gard_right_spot");
var kitchen_spot=document.getElementById("kitchen_spot");
var Balcony_spot=document.getElementById("Balcony_spot");
var pool_spot=document.getElementById("pool_spot");

var salarm=document.getElementById("salarm");
var sdoor=document.getElementById("sdoor");
var slivingspot=document.getElementById("slivingspot");
var sgard_right_spot=document.getElementById("sgard_right_spot");
var sgard_left_spot=document.getElementById("sgard_left_spot");
var skitchenspot=document.getElementById("skitchenspot");
var sBalcony_spot=document.getElementById("sBalcony_spot");
var spool_spot=document.getElementById("spool_spot");



function pool_spotc(){
  let state=pool_spot.getAttribute("state");
  console.log(state);
  if(state =="off"){
      spool_spot.style.top="5px";
      pool_spot.style.backgroundColor="#24B940";
      pool_spot.setAttribute("state","on");
  }
  else{
      spool_spot.style.top="21px";
      pool_spot.style.backgroundColor="#C7C5E3";
      pool_spot.setAttribute("state","off");
  }
  let href=pool_spot.getAttribute("href");
  if(href =="pool_on"){
    var someUrl = "/pool_off";   $.ajax({                       
      url: someUrl,  timeout: 1000  })
      pool_spot.setAttribute("href","pool_off");
  }
  else{
    var someUrl = "/pool_on";   $.ajax({  url: someUrl, timeout: 1000 })
    pool_spot.setAttribute("href","pool_on");
  }
}
function Balcony_spotc(){
    let state=Balcony_spot.getAttribute("state");
    console.log(state);
    if(state =="off"){
        sBalcony_spot.style.top="5px";
        Balcony_spot.style.backgroundColor="#24B940";
        Balcony_spot.setAttribute("state","on");
    }
    else{
        sBalcony_spot.style.top="21px";
        Balcony_spot.style.backgroundColor="#C7C5E3";
        Balcony_spot.setAttribute("state","off");
    }
    let href=Balcony_spot.getAttribute("href");
    if(href =="Balcony_on"){
      var someUrl = "/Balcony_off";   $.ajax({                       
        url: someUrl,  timeout: 1000  })
        Balcony_spot.setAttribute("href","Balcony_off");
    }
    else{
      var someUrl = "/Balcony_on";   $.ajax({  url: someUrl, timeout: 1000 })
      Balcony_spot.setAttribute("href","Balcony_on");
    }
}
function kitchen_spotc(){
    let state=kitchen_spot.getAttribute("state");
    console.log(state);
    if(state =="off"){
        skitchenspot.style.top="5px";
        kitchen_spot.style.backgroundColor="#24B940";
        kitchen_spot.setAttribute("state","on");
        
    }
    else{
        skitchenspot.style.top="21px";
        kitchen_spot.style.backgroundColor="#C7C5E3";
        kitchen_spot.setAttribute("state","off");
    }
    let href=kitchen_spot.getAttribute("href");
    if(href =="kitchen_on"){
      var someUrl = "/kitchen_off";   $.ajax({                       
        url: someUrl,  timeout: 1000  })
        kitchen_spot.setAttribute("href","kitchen_off");
    }
    else{
      var someUrl = "/kitchen_on";   $.ajax({  url: someUrl, timeout: 1000 })
      kitchen_spot.setAttribute("href","kitchen_on");
    }
}

function alarmc(){
  let state=alarm.getAttribute("state");
  console.log(state);
  if(state =="off"){
      salarm.style.top="5px";
      alarm.style.backgroundColor="#24B940";
      alarm.setAttribute("state","on");
      
  }
  else{
      salarm.style.top="21px";
      alarm.style.backgroundColor="#C7C5E3";
      alarm.setAttribute("state","off");
  }
  let href=alarm.getAttribute("href");
  if(href =="alarm_on"){
    var someUrl = "/alarm_off";   $.ajax({                       
      url: someUrl,  timeout: 1000  })
      alarm.setAttribute("href","alarm_off");
  }
  else{
    var someUrl = "/alarm_on";   $.ajax({  url: someUrl, timeout: 1000 })
    alarm.setAttribute("href","alarm_on");
  }
}
function doorc(){
    let state=door.getAttribute("state");
    console.log(state);
    if(state =="off"){
        sdoor.style.top="5px";
        door.style.backgroundColor="#24B940";
        door.setAttribute("state","on");
        var someUrl = "/door_off";   $.ajax({  url: someUrl, timeout: 1000 })
    }
    else{
        sdoor.style.top="21px";
        door.style.backgroundColor="#C7C5E3";
        door.setAttribute("state","off");
        var someUrl = "/door_on";   $.ajax({  url: someUrl, timeout: 1000 })
    }
}
function gard_right_spotc(){
  let state=gard_right_spot.getAttribute("state");
  if(state =="off"){
      sgard_right_spot.style.top="5px";
      gard_right_spot.style.backgroundColor="#24B940";
      gard_right_spot.setAttribute("state","on");
  }
  else{
      sgard_right_spot.style.top="21px";
      gard_right_spot.style.backgroundColor="#C7C5E3";
      gard_right_spot.setAttribute("state","off");
  }
  let href=gard_right_spot.getAttribute("href");
  console.log(href);
  if(href =="gard_rigth_on"){
    var someUrl = "/gard_rigth_off";   $.ajax({                       
      url: someUrl,  timeout: 1000  })
      gard_right_spot.setAttribute("href","gard_rigth_off");
  }
  else{
    var someUrl = "/gard_rigth_on";   $.ajax({  url: someUrl, timeout: 1000 })
      gard_right_spot.setAttribute("href","gard_rigth_on");
  }
}

function gard_left_spotc(){
  let state=gard_left_spot.getAttribute("state");
  if(state =="off"){
      sgard_left_spot.style.top="5px";
      gard_left_spot.style.backgroundColor="#24B940";
      gard_left_spot.setAttribute("state","on");
  }
  else{
      sgard_left_spot.style.top="21px";
      gard_left_spot.style.backgroundColor="#C7C5E3";
      gard_left_spot.setAttribute("state","off");
  }
  let href=gard_left_spot.getAttribute("href");
  console.log(href);
  if(href =="gard_left_on"){
    var someUrl = "/gard_left_off";   $.ajax({                       
      url: someUrl,  timeout: 1000  })
      gard_left_spot.setAttribute("href","gard_left_off");
  }
  else{
    var someUrl = "/gard_left_on";   $.ajax({  url: someUrl, timeout: 1000 })
      gard_left_spot.setAttribute("href","gard_left_on");
  }
}
function living_potc(){
    let state=living_spot.getAttribute("state");
    if(state =="off"){
        slivingspot.style.top="5px";
        living_spot.style.backgroundColor="#24B940";
        living_spot.setAttribute("state","on");
    }
    else{
        slivingspot.style.top="21px";
        living_spot.style.backgroundColor="#C7C5E3";
        living_spot.setAttribute("state","off");
    }
    let href=living_spot.getAttribute("href");
    console.log(href);
    if(href =="living_on"){
      var someUrl = "/living_on";   $.ajax({                       
        url: someUrl,  timeout: 1000  })
        living_spot.setAttribute("href","living_off");
    }
    else{
      var someUrl = "/living_off";   $.ajax({  url: someUrl, timeout: 1000 })
        living_spot.setAttribute("href","living_on");
    }
}

/**/
var email =document.getElementById("email");
var pass = document.getElementById("Password");

function passwordCheck(){
    console.log(email.value);
    console.log(pass.value);
if(email.value =="kenanhomsi@gmail.com" && pass.value=="123456789"){
    document.getElementById("log_a").setAttribute("href",".//info.html");
}
}

/**/
setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        document.getElementById("temperature").innerHTML = this.responseText;
        document.getElementById("temperature_2").innerHTML = this.responseText;
        
    }
    };
    xhttp.open("GET", "/temperature", true);
    xhttp.send();
  }, 10000 ) ;

  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("humidity").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/humidity", true);
    xhttp.send();
  }, 10000 ) ;

  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("flame").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/flame", true);
    xhttp.send();
  }, 10000 ) ;
  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var value=this.responseText;
        if(value=="off"){
            document.getElementById("gas").innerHTML = "idle";
        }
        if(value=="on"){
            document.getElementById("gas").innerHTML = "active";
        }
      }
    };
    xhttp.open("GET", "/gas", true);
    xhttp.send();
  }, 10000 ) ;