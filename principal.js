function gift()
{
    var text;
    var gift=prompt("QUE QUIERES COMO REGALO DE CUMPLEAÑOS???","Hoy cumple años la niña mas bella del mundo🎁");
    if (gift == null || gift == "") {
        text = "Please enter a gift :( ";
      } else {
        text = "Yeee, Es hoy!, Es hoy! " + gift + "🥳NIKOL🥳🎂❤️ ";
      }
      document.getElementById("gif").innerHTML = text;
          document.getElementById('gif').style.fontSize = '30px';

}
function PlayAudio(){
  document.getElementById("audio1").play();
}