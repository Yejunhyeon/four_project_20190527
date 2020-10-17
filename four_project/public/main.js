function getget(a) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200){
      myGet = JSON.parse(xhr.responseText);
      console.log(myGet);
      console.log(myGet[a].name);
      document.getElementById("name").innerHTML="NAME : "+myGet[a].name;
      document.getElementById("birth").innerHTML=myGet[a].birth;
      document.getElementById("blood").innerHTML=myGet[a].bloodtype;
      document.getElementById("school").innerHTML=myGet[a].highschool;
      document.getElementById("address").innerHTML=myGet[a].adrs;
      document.getElementById("motto").innerHTML=myGet[a].motto;
      document.getElementById("self").innerHTML=myGet[a].introduce;
      // console.log(myGet[0].name);
    } else {
      console.error(xhr.responseText);
    }
  }

  xhr.open('GET','/getmy');
  xhr.send();

};

function pagefetch(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
    document.querySelector('article').textContent=text;
    })
  })
}


// function myFunction() {
// document.getElementById("memberimage").style.display="block";
// document.getElementById("japanmenu").style.display="none";
// document.getElementById("memberprofile").style.display="none";
// }
// function myFunction2() {
// document.getElementById("memberimage").style.display="none";
// document.getElementById("japanmenu").style.display="block";
// document.getElementById("memberprofile").style.display="none";
// }
// function myFunction3() {
// document.getElementById("memberimage").style.display="none";
// document.getElementById("japanmenu").style.display="none";
// document.getElementById("memberprofile").style.display="none";
// }
function yuclick() {
document.getElementById("memberprofile").style.display="block";
document.getElementById("yuphoto").style.display="block";
document.getElementById("kimphoto").style.display="none";
document.getElementById("yephoto").style.display="none";
document.getElementById("choiphoto").style.display="none";
document.getElementById("leephoto").style.display="none";
}
function kimclick() {
document.getElementById("memberprofile").style.display="block";
document.getElementById("yuphoto").style.display="none";
document.getElementById("kimphoto").style.display="block";
document.getElementById("yephoto").style.display="none";
document.getElementById("choiphoto").style.display="none";
document.getElementById("leephoto").style.display="none";
}
function yeclick() {
document.getElementById("memberprofile").style.display="block";
document.getElementById("yuphoto").style.display="none";
document.getElementById("kimphoto").style.display="none";
document.getElementById("yephoto").style.display="block";
document.getElementById("choiphoto").style.display="none";
document.getElementById("leephoto").style.display="none";
}
function choiclick() {
document.getElementById("memberprofile").style.display="block";
document.getElementById("yuphoto").style.display="none";
document.getElementById("kimphoto").style.display="none";
document.getElementById("yephoto").style.display="none";
document.getElementById("choiphoto").style.display="block";
document.getElementById("leephoto").style.display="none";
}
function leeclick() {
document.getElementById("memberprofile").style.display="block";
document.getElementById("yuphoto").style.display="none";
document.getElementById("kimphoto").style.display="none";
document.getElementById("yephoto").style.display="none";
document.getElementById("choiphoto").style.display="none";
document.getElementById("choiphoto").style.display="none";
document.getElementById("leephoto").style.display="block";
}
function weekplan(e) {
  document.getElementById("weekendinfor").style.display = "block";
  
  var whatweek="";
  whatweek = document.getElementById(e.getAttribute('id')).getAttribute('id');
  var id= whatweek.substring(0,1);
  /*이 Id값으로 주차별 데이터 가지고 오기*/
  /*1은 1주차  ~ 6은 6주차*/
  if(id==1){
  document.getElementById("weekendimg").src="1주차.jpg";
  }else if(id==2){
      document.getElementById("weekendimg").src="2주차.jpg";
  }else if(id==3){
      document.getElementById("weekendimg").src="3주차.jpg";
  }else if(id==4){
      document.getElementById("weekendimg").src="4주차.jpg";
  }else if(id==5){
      document.getElementById("weekendimg").src="5주차.png";
  }else if(id==6){
      document.getElementById("weekendimg").src="6주차.jpg";
  }
  var i=document.getElementById("weekendimg").scrollIntoView();
}