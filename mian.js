var video=document.querySelector("video");
var how_it_work=document.getElementById("video_text");
console.log(how_it_work);
function videoControl(){
    video.setAttribute("controls","controls");
    how_it_work.style.display="none";
}

var door=document.getElementById("door");
var spot=document.getElementById("spot");
var wifi=document.getElementById("wifi");
var air=document.getElementById("air");
var sdoor=document.getElementById("sdoor");
var sspot=document.getElementById("sspot");
var swifi=document.getElementById("swifi");
var sair=document.getElementById("sair");
function airc(){
    let state=air.getAttribute("state");
    console.log(state);
    if(state =="off"){
        sair.style.top="5px";
        air.style.backgroundColor="#24B940";
        air.setAttribute("state","on");
    }
    else{
        sair.style.top="21px";
        air.style.backgroundColor="#C7C5E3";
        air.setAttribute("state","off");
    }
}
function wific(){
    let state=wifi.getAttribute("state");
    console.log(state);
    if(state =="off"){
        swifi.style.top="5px";
        wifi.style.backgroundColor="#24B940";
        wifi.setAttribute("state","on");
    }
    else{
        swifi.style.top="21px";
        wifi.style.backgroundColor="#C7C5E3";
        wifi.setAttribute("state","off");
    }
}
function doorc(){
    let state=door.getAttribute("state");
    console.log(state);
    if(state =="off"){
        sdoor.style.top="5px";
        door.style.backgroundColor="#24B940";
        door.setAttribute("state","on");
    }
    else{
        sdoor.style.top="21px";
        door.style.backgroundColor="#C7C5E3";
        door.setAttribute("state","off");
    }
}
function spotc(){
    let state=spot.getAttribute("state");
    console.log(state);
    if(state =="off"){
        sspot.style.top="5px";
        spot.style.backgroundColor="#24B940";
        spot.setAttribute("state","on");
    }
    else{
        sspot.style.top="21px";
        spot.style.backgroundColor="#C7C5E3";
        spot.setAttribute("state","off");
    }
}

/**/
var email =document.getElementById("email");
var pass = document.getElementById("Password");

function passwordCheck(){
    console.log(email.value);
    console.log(pass.value);
if(email.value =="kenanhomsi@gmail.com" && pass.value=="123456789"){
    document.getElementById("log_a").setAttribute("href",".//infro.html");
}
}