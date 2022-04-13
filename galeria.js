var num = 1;
function Adelante() {
  num++;
  if (num>3){
    num =1;
    var foto = document.getElementById('foto');
    foto.src = "Imagenes/foto"+num+".jpg";
  }
}

function Atras() {
  num--;
  if (num<1){
    num =3;
    var foto = document.getElementById('foto');
    foto.src = "Imagenes/foto"+num+".jpg";
  }
}