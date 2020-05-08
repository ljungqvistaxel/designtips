function onscroll() {
  var header = document.getElementById("header");
  var headerShadow = document.getElementById("headerShadow")[0];
  var headerNav = document.getElementById("headerNav");
  var title = document.getElementById("title");

  var andel = (window.scrollY/100);
  //console.log(andel);

  if (andel < 1){ //SPECIALGREJER
    //header.style['clip-path'] = "polygon(0% 0%, 100% 0%, 100% calc(100% - "+ (5-andel*5) +"vw), 50% 100%, 0% calc(100% - "+ (5-andel*5) +"vw))";
    header.style['clip-path'] = "polygon(0% 0%, 100% 0%, 100% calc(100% - 5vw), 50% 100%, 0% calc(100% - 5vw))";
  }else{
    header.style['clip-path'] = "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)";
  }

  if(window.innerWidth >= 780){ //DESKTOP
    if(window.scrollY < 250){
      //document.getElementById("navFixed").style['left'] = "-60px";
    }else{
      //document.getElementById("navFixed").style['left'] = "0px";
    }
  }else{ //MOBILE



  }

  if(andel >= 1){
    toggleHeader(true)
  }
  else{
    toggleHeader(false)
  }
}

function toggleHeader(bool){
  if(bool){
    header.classList.add("compact");
    headerShadow.classList.add("compact");
    headerNav.classList.add("compact");
    title.classList.add("compact");
  }else{
    header.classList.remove("compact");
    headerShadow.classList.remove("compact");
    headerNav.classList.remove("compact");
    title.classList.remove("compact");
  }
}

function theme(theme) {
  if(theme == 0){
    document.body.className = "themeColor";
  }
  else if(theme == 1){
    document.body.className = "themeDark";
  }
  else if(theme == 2){
    document.body.className = "themeGray";
  }
}

function font(font) {
  if(font == "x"){
    document.body.style["font-family"] = "";
  }
  else if(font == 0){
    document.body.style["font-family"] = "'Pacifico', cursive";
  }
  else if(font == 1){
    document.body.style["font-family"] = "'Ubuntu', sans-serif";
  }
  else if(font == 2){
    document.body.style["font-family"] = "'Baloo Chettan 2', cursive";
  }
  else if(font == 3){
    document.body.style["font-family"] = "'DM Mono', monospace";
  }
}
