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

var email=document.getElementById("email");
var Password=document.getElementById("Password");

function passwordCheck(){
  console.log(email);
  console.log(Password);
  if(email.value =="kenanhomsi0959@gmail.com" && Password.value =="123456789" ){
    var logBtn=document.getElementById('log_a');
    logBtn.setAttribute('href','info.html')
  }else{
   window.alert('Wrong  email or password');
  }
}


const pool_spotc=()=>{
  let state=pool_spot.getAttribute("state");
 
  if(state == "on"){
      spool_spot.style.top="5px";
      pool_spot.style.backgroundColor="#24B940";
      pool_spot.setAttribute("state","on");
  }
  else{
      spool_spot.style.top="21px";
      pool_spot.style.backgroundColor="#C7C5E3";
      pool_spot.setAttribute("state","off");
  }
}

const pool_spotcOnclick=()=>{
  let state=pool_spot.getAttribute("state");
 
  if(state == "off"){
      spool_spot.style.top="5px";
      pool_spot.style.backgroundColor="#24B940";
      pool_spot.setAttribute("state","on");
  }
  else{
      spool_spot.style.top="21px";
      pool_spot.style.backgroundColor="#C7C5E3";
      pool_spot.setAttribute("state","off");
  }
   state=pool_spot.getAttribute("state");
  axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    LED_pool_livingSensor:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })
}
const Balcony_spotc=()=>{
    let state=Balcony_spot.getAttribute("state");
    if(state == "on"){
        sBalcony_spot.style.top="5px";
        Balcony_spot.style.backgroundColor="#24B940";
        Balcony_spot.setAttribute("state","on");
    }
    else{
        sBalcony_spot.style.top="21px";
        Balcony_spot.style.backgroundColor="#C7C5E3";
        Balcony_spot.setAttribute("state","off");
    }

}
const Balcony_spotcOnclick=()=>{
  let state=Balcony_spot.getAttribute("state");
  if(state == "off"){
      sBalcony_spot.style.top="5px";
      Balcony_spot.style.backgroundColor="#24B940";
      Balcony_spot.setAttribute("state","on");
  }
  else{
      sBalcony_spot.style.top="21px";
      Balcony_spot.style.backgroundColor="#C7C5E3";
      Balcony_spot.setAttribute("state","off");
  }
  state=Balcony_spot.getAttribute("state");
  axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    LED_Balcony_Sensor:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })

}

const gard_right_spotc=()=>{
  let state=gard_right_spot.getAttribute("state");
  if(state == "on"){
      sgard_right_spot.style.top="5px";
      gard_right_spot.style.backgroundColor="#24B940";
      gard_right_spot.setAttribute("state","on");
  }
  else{
      sgard_right_spot.style.top="21px";
      gard_right_spot.style.backgroundColor="#C7C5E3";
      gard_right_spot.setAttribute("state","off");
  }
  
}
const gard_right_spotcOnclick=()=>{
  let state=gard_right_spot.getAttribute("state");
  if(state == "off"){
      sgard_right_spot.style.top="5px";
      gard_right_spot.style.backgroundColor="#24B940";
      gard_right_spot.setAttribute("state","on");
  }
  else{
      sgard_right_spot.style.top="21px";
      gard_right_spot.style.backgroundColor="#C7C5E3";
      gard_right_spot.setAttribute("state","off");
  }
  state=gard_right_spot.getAttribute("state");
  axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    LED_garden_right_livingSensor:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })
  
}

const gard_left_spotc=()=>{
  let state=gard_left_spot.getAttribute("state");
  if(state == "on"){
      sgard_left_spot.style.top="5px";
      gard_left_spot.style.backgroundColor="#24B940";
      gard_left_spot.setAttribute("state","on");
  }
  else{
      sgard_left_spot.style.top="21px";
      gard_left_spot.style.backgroundColor="#C7C5E3";
      gard_left_spot.setAttribute("state","off");
  }
 
}
const gard_left_spotcOnclick=()=>{
  let state=gard_left_spot.getAttribute("state");
  if(state == "off"){
      sgard_left_spot.style.top="5px";
      gard_left_spot.style.backgroundColor="#24B940";
      gard_left_spot.setAttribute("state","on");
  }
  else{
      sgard_left_spot.style.top="21px";
      gard_left_spot.style.backgroundColor="#C7C5E3";
      gard_left_spot.setAttribute("state","off");
  }
  state=gard_left_spot.getAttribute("state");
  axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    LED_garden_left_Sensor:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })
 
}

const kitchen_spotc=()=>{
    let state=kitchen_spot.getAttribute("state");
    if(state == "on"){
        skitchenspot.style.top="5px";
        kitchen_spot.style.backgroundColor="#24B940";
        kitchen_spot.setAttribute("state","on");
        
    }
    else{
        skitchenspot.style.top="21px";
        kitchen_spot.style.backgroundColor="#C7C5E3";
        kitchen_spot.setAttribute("state","off");
    }

}
const kitchen_spotcOnclick=()=>{
  let state=kitchen_spot.getAttribute("state");
  if(state == "off"){
      skitchenspot.style.top="5px";
      kitchen_spot.style.backgroundColor="#24B940";
      kitchen_spot.setAttribute("state","on");
      
  }
  else{
      skitchenspot.style.top="21px";
      kitchen_spot.style.backgroundColor="#C7C5E3";
      kitchen_spot.setAttribute("state","off");
  }
  state=kitchen_spot.getAttribute("state");
  axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    LED_kitchen_Sensor:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })

}

const alarmc=()=>{
  let state=alarm.getAttribute("state");
  if(state == "on"){
      salarm.style.top="5px";
      alarm.style.backgroundColor="#24B940";
      alarm.setAttribute("state","on");
      
  }
  else{
      salarm.style.top="21px";
      alarm.style.backgroundColor="#C7C5E3";
      alarm.setAttribute("state","off");
  }

}
const alarmcOnclick=()=>{
  let state=alarm.getAttribute("state");
  if(state == "off"){
      salarm.style.top="5px";
      alarm.style.backgroundColor="#24B940";
      alarm.setAttribute("state","on");
      
  }
  else{
      salarm.style.top="21px";
      alarm.style.backgroundColor="#C7C5E3";
      alarm.setAttribute("state","off");
  }
  state=alarm.getAttribute("state");
  axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    securityStatue:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })

}

const doorc=()=>{
   let state=door.getAttribute("state");
    if(state == "on"){
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
const doorcOnclick=()=>{
  let state=door.getAttribute("state");
   if(state == "off"){
       sdoor.style.top="5px";
       door.style.backgroundColor="#24B940";
       door.setAttribute("state","on");
   }
   else{
       sdoor.style.top="21px";
       door.style.backgroundColor="#C7C5E3";
       door.setAttribute("state","off");
   }
   state=door.getAttribute("state");
   axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    DoorStatue:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })
}

const living_potc=()=>{
  let state=living_spot.getAttribute("state");
   
    if(state == "on"){
        slivingspot.style.top="5px";
        living_spot.style.backgroundColor="#24B940";
        living_spot.setAttribute("state","on");
    }
    else{
        slivingspot.style.top="21px";
        living_spot.style.backgroundColor="#C7C5E3";
        living_spot.setAttribute("state","off");
    }
   
}
const living_potcOnclick=()=>{
  let state=living_spot.getAttribute("state");
   
    if(state == "off"){
        slivingspot.style.top="5px";
        living_spot.style.backgroundColor="#24B940";
        living_spot.setAttribute("state","on");
    }
    else{
        slivingspot.style.top="21px";
        living_spot.style.backgroundColor="#C7C5E3";
        living_spot.setAttribute("state","off");
    }
    state=living_spot.getAttribute("state");
    axios.patch('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
      LED_living_Sensor:state
  },{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((com)=>{
    console.log(com)

  }).catch((err)=>{
    console.log(err)
  })
   
}


const myPromis=new Promise((res,rej)=>{
  
   axios.post('https://smarthome-api-nnmo.onrender.com/api/v1/auth/login', {
      email:"kenanhomsi0959@gmail.com",
    password:"123456789"
  })
  .then(function (response) {
    
    const { token } = response.data;
   
    res(token);
  })
  .catch(function (error) {
    rej(error);
  });


});



const onResolve=(res)=>{
  token=res;

  const getServicesPromise=new Promise((res2,rej2)=>{
  
     axios.get('https://smarthome-api-nnmo.onrender.com/api/v1/singleService/',{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((obj) => {
    const Services=obj.data.service;
    
    res2(Services);
  })
    .catch(function (error) {
      rej2(error);
    });
 });


 getServicesPromise.then(
  (res2)=>{
    const Services= res2;
    console.log(Services);
    pool_spot.setAttribute("state",Services.LED_pool_livingSensor);
    Balcony_spot.setAttribute("state",Services.LED_Balcony_Sensor);
    kitchen_spot.setAttribute("state",Services.LED_kitchen_Sensor);
    alarm.setAttribute("state",Services.securityStatue);
    door.setAttribute("state",Services.DoorStatue);
    living_spot.setAttribute("state",Services.LED_living_Sensor);
    gard_left_spot.setAttribute("state",Services.LED_garden_left_Sensor);
    gard_right_spot.setAttribute("state",Services.LED_garden_right_livingSensor);
    document.getElementById("temperature").innerHTML =` ${Services.temperature} T`;
    document.getElementById("temperature_2").innerHTML = ` ${Services.temperature} `;
    document.getElementById("humidity").innerHTML = `${Services.humidity} H`;
    document.getElementById("flame").innerHTML = Services.flameSensor;
    pool_spotc();
    Balcony_spotc();
    gard_right_spotc();
    gard_left_spotc();
    kitchen_spotc();
    alarmc();
    doorc();
    living_potc();
    if(Services.gassSensor == 0)
    {
      document.getElementById("gas").innerHTML = "idle";
    }else{
      document.getElementById("flame").innerHTML = Services.gassSensor;
    }


    
  },
  (rej2)=>{
        console.log(`from second ${rej2}`)}
)

 }

setInterval(()=>{
  myPromis.then(onResolve,(rej)=>console.log(rej))
},5000);






  












