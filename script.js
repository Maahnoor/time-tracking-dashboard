function change(option,txt){
  var show= document.getElementById('show');
  show.innerHTML='';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           const obj= JSON.parse(xhttp.responseText);

           obj.forEach(item=>{
            show.innerHTML+=
            `<div class="${item.title}">
                <div class="time-card">
                <div class="heading-container">
                  <h3 class="heading">${item.title}</h3>
                  <img src="images/icon-ellipsis.svg" alt="ellipsis icon">
                  </div>
                  <div class="time-container">
                  <h1 class="current-time">${item.timeframes[option].current}hrs</h1>
                  <p class="previous-time">${txt} - ${item.timeframes[option].previous}hrs</p>
                  </div>
                </div>
            </div>`

           })
           

        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}


//shows active button
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


window.onload = function() {
  change('weekly','Last Week');
};
