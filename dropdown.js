

var menu = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (!content.classList.contains("opened")) {
         for(let k = 0; k < menu.length; k++){
            if(menu[k].nextElementSibling.classList.contains("opened")){
                 menu[k].nextElementSibling.classList.remove("opened");
            }
        }
        content.classList.add("opened");
    } else {
        content.classList.remove("opened");
    }
  });
}