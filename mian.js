var video=document.querySelector("video");
var how_it_work=document.getElementById("video_text");
console.log(how_it_work);
function videoControl(){
    video.setAttribute("controls","controls");
    how_it_work.style.display="none";
}