function MyProjects(){
    document.getElementById("myProjects").classList.toggle("show");
}
window.onclick=function(event){
if(!event.target.matches('.dropbtn')){
  var dropdowns = document.getElementsByClassName("projects");
  var i;
  for(i=0;i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
          openDropdown.classList.remove('show');
      }
    }
  }
}
window.onscroll = function(){
  myFunction();
}

var yes = document.getElementById("header");

var sticky = yes.offsetTop;

function myFunction(){
  if(window.pageYOffset > sticky){
    yes.classList.add("sticky");
  }
  else{
    yes.classList.remove("sticky");
  }
}