const d = document,
  $modal = d.querySelector(".modal"), $reset = d.querySelector('#reset'),
   $form = d.querySelector('.form'),
  $checkbox = d.querySelectorAll('.checkbox_m');

d.addEventListener('DOMContentLoaded', e=>{
  $checkbox.forEach(el=>{el.checked = false})

})

d.addEventListener("click", (e) => {
  if(e.target.matches('#submit')){
    e.preventDefault()
  }
  if(e.target.matches('#reset')){
    location.reload()
  }
  if (e.target.matches(".burger")) {
    if (!$modal.classList.contains("modal-on")) {
      $modal.classList.add("modal-on");
    } else {
      $modal.classList.remove("modal-on");
    }
  }
});

function validarContraseña() {
  var pass = __('pass').value,
      pass2 = __('pass2').value;
  if(pass != '' && pass2 != ''){
    if(pass != pass2){
      //si las contraseñas no coinciden
      __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';
    } else {
      //Si todo esta correcto 
      __('form').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Los datos son correctos :)</p>';
    }
  } else {
    //si los campos o uno, este vacio
    __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
  } 
}