let requestURL = 'action.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();
function dataReportStatus(data){
    document.getElementById("picture").innerHTML +="<div class='carousel-item'><img class='d-block h-50 w-100' src='' alt='Third slide'></div>";
    // for(let i=0; i<data.length;i++){
    //     document.getElementById("rows3").innerHTML +="<div class='col-sm-2 card' id='card"+i+"'style='width: 18rem;'><img class='card-img-top' src='"+data[i].image+"' alt='Card image cap'></div>";
    //     document.getElementById("card"+i).innerHTML += "<div class='card-body'><h6 class='card-title font-weight-bold'  style='font-size:16px;'>"+data[i].song+"</h6>"
    //     document.getElementById("card"+i).innerHTML += "<p class='card-text' style='font-size:13px;'>"+data[i].artist+"</p>"+"</div>";
    // }
}