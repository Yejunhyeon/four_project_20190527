

function getteam(a) {
    fetch('/getteam', {method: 'GET'})
    .then((res) => {
        if (res.status == '200' || res.status == '201' || res.status == '304') {
            return res.json();
        }
    })
    .then((resJson) => {
        console.log(resJson);
        const users = resJson;
        document.getElementById("name").innerHTML="NAME : " + users[a].name;
        document.getElementById("birth").innerHTML="BIRTH : " + users[a].birth;
        document.getElementById("blood").innerHTML="BLOOD : " + users[a].bloodtype;
        document.getElementById("school").innerHTML="HIGH SCHOOL : " + users[a].highschool;
        document.getElementById("address").innerHTML="ADDRESS : " + users[a].adrs;
        document.getElementById("motto").innerHTML="MOTTO : " + users[a].motto;
        document.getElementById("self").innerHTML="INTRODUCE : " + users[a].introduce;
    })
};
function getjapan(b){
    fetch('/getjapan', {method:'GET'})
    .then((res)=>{
        if (res.status == '200' || res.status == '201' || res.status == '304') {
            return res.json();
        }
    })
    .then((resJson)=>{
        console.log(resJson);
        const japans=resJson;
        document.getElementById("date").innerHTML="날짜 : "+japans[b].date;
        document.getElementById("place").innerHTML="지역 : "+japans[b].place;
        document.getElementById("cost").innerHTML="경비 : "+japans[b].cost;
        document.getElementById("plan").innerHTML="계획 : "+japans[b].plan;
        document.getElementById("experience").innerHTML="체험 : "+japans[b].experience;
    })
};

function yuclick() {
    document.getElementById("memberprofile").style.display = "block";
    document.getElementById("yuphoto").style.display = "block";
    document.getElementById("kimphoto").style.display = "none";
    document.getElementById("yephoto").style.display = "none";
    document.getElementById("choiphoto").style.display = "none";
    document.getElementById("leephoto").style.display = "none";
}

function kimclick() {
    document.getElementById("memberprofile").style.display = "block";
    document.getElementById("yuphoto").style.display = "none";
    document.getElementById("kimphoto").style.display = "block";
    document.getElementById("yephoto").style.display = "none";
    document.getElementById("choiphoto").style.display = "none";
    document.getElementById("leephoto").style.display = "none";
}

function yeclick() {
    document.getElementById("memberprofile").style.display = "block";
    document.getElementById("yuphoto").style.display = "none";
    document.getElementById("kimphoto").style.display = "none";
    document.getElementById("yephoto").style.display = "block";
    document.getElementById("choiphoto").style.display = "none";
    document.getElementById("leephoto").style.display = "none";
}

function choiclick() {
    document.getElementById("memberprofile").style.display = "block";
    document.getElementById("yuphoto").style.display = "none";
    document.getElementById("kimphoto").style.display = "none";
    document.getElementById("yephoto").style.display = "none";
    document.getElementById("choiphoto").style.display = "block";
    document.getElementById("leephoto").style.display = "none";
}

function leeclick() {
    document.getElementById("memberprofile").style.display = "block";
    document.getElementById("yuphoto").style.display = "none";
    document.getElementById("kimphoto").style.display = "none";
    document.getElementById("yephoto").style.display = "none";
    document.getElementById("choiphoto").style.display = "none";
    document.getElementById("choiphoto").style.display = "none";
    document.getElementById("leephoto").style.display = "block";
}

function weekplan(e) {
    document.getElementById("weekendinfor").style.display = "block";

    var whatweek = "";
    whatweek = document.getElementById(e.getAttribute('id')).getAttribute('id');
    var id = whatweek.substring(0, 1);
    /*이 Id값으로 주차별 데이터 가지고 오기*/
    /*1은 1주차  ~ 6은 6주차*/
    if (id == 1) {
        document.getElementById("weekendimg").src = "1주차.jpg";
    } else if (id == 2) {
        document.getElementById("weekendimg").src = "2주차.jpg";
    } else if (id == 3) {
        document.getElementById("weekendimg").src = "3주차.jpg";
    } else if (id == 4) {
        document.getElementById("weekendimg").src = "4주차.jpg";
    } else if (id == 5) {
        document.getElementById("weekendimg").src = "5주차.png";
    } else if (id == 6) {
        document.getElementById("weekendimg").src = "6주차.jpg";
    }
    var i=document.getElementById("weekendimg").scrollIntoView();
}
