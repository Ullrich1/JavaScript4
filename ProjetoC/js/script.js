function doDemo(button){
    var square = document.getElementById("square");
    square.style.backgroundColor = "#fa4";
    button.setAttribute("enabled","true");
    setTimeout(clearDemo, 2000, button);
}

function clearDemo(button){
    var square = document.getElementById("square");
    square.style.background = "transparent";
    button.removeAttribute("disable");
}