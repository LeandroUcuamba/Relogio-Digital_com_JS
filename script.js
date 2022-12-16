
function actualizarTempo(){
   var display = document.querySelector('.display');

   var agora = new Date();
   var horario = agora.getHours()+ ":" + agora.getMinutes()+ ":" + agora.getSeconds();

   display.textContent = horario;
}

setInterval(actualizarTempo, 1000);