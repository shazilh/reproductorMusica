function reproduce(){
  document.getElementById("audio1").play();
};
function pausado(){
  document.getElementById("audio1").pause();
};
function parar(){
  document.getElementById("audio1").load();
};

function avanzar(){
  document.getElementById("audio1").currentTime+=0.5;
};
function retroceder(){
  document.getElementById("audio1").currentTime-=0.5;
};
function volumenSubir(){
  document.getElementById("audio1").volume+=0.1;
};
function volumenBajar(){
  document.getElementById("audio1").volume-=0.1;
};
function progreso(){
  document.getElementById("audio1").range();
};
