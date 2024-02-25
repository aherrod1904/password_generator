import './style.scss';
import PasswordCheck from './passwordCheck';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";


let resultado = document.getElementById("result");
let sizenumber = document.getElementById("range_number");
let btn = document.getElementById("generapass");
let copy = document.getElementById("copy");

let range = document.getElementById("range");
sizenumber.textContent = range.value; 
range.addEventListener("change", () => {
    sizenumber.textContent = range.value; 
})

btn.addEventListener("click", () => {
    let passw = new PasswordCheck(parseInt(range.value)); 
    passw.cleanBar(); 
    resultado.textContent = passw.getPassword();
    passw.setStrength();

    if(range.value <= 6){
        Toastify({
            text: "La contraseña es muy corta, te recomiendo que tenga al menos 6 caracteres",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
})

copy.addEventListener("click", () =>{
    if (!resultado.textContent) {
        Toastify({
          text: "No hay nada para copiar",
          duration: 3000,
          newWindow: false,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      }else{
        navigator.clipboard.writeText(resultado.textContent);
        Toastify({
            text: "Contraseña copiada en el portapapeles",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
          }).showToast();
      }
})