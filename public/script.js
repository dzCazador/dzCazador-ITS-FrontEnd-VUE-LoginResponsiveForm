// variables booleanas para control
let isLoginActive       = true;
let isRegisterActive    = false;

// referencias al DOM
let wrapper      = document.querySelector(".wrapper") // envoltura
let formBox      = document.querySelector(".form-bx") // caja del formulario

// formulario
const registerForm = document.getElementById('register-form')

// funciones

// Mostrar register
function activeRegister(){
    if(isLoginActive) {
        isRegisterActive = true
        isLoginActive = false
        formBox.classList.add('active')
        wrapper.classList.add('active')
    }
    else {
        activeLogin()
    }
}

// Mostrar login
function activeLogin(){
    if(isRegisterActive) {
        isLoginActive = true
        isRegisterActive = false
        formBox.classList.remove('active')
        wrapper.classList.remove('active')
    }
    else {
        activeRegister()
    }
}

// OBTENER DATOS DEL FORMULARIO

function manejarFormulario(event) {
    // prevengo que el envio me refresque el navegador
    event.preventDefault();
    // creo una variable interna en bloque del metodo para 
    // decir que la abstraccion del formulario esta dentro del 
    // target del event
    const _form = event.target;
    // creo un objeto FormData usando new FormData, mas info: https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const formData = new FormData(_form)
    // creo un objeto vacio que contendra las claves y valores del formulario
    const data = {}

    // un objeto FormData no es un objeto comun, sino que tiene metodos para iterarlo
    // en este caso iteramos usando su metodo entries que devuelve un array
    for(let claveValor of formData.entries()) {
        // y asignamos las claves y los valores a nuestro objeto
        // construyendolo asi para futuro uso
        data[claveValor[0]] = claveValor[1]
    }

    // imprimo mi objeto data que tiene los datos que necesito
    console.log("Mi Objeto Form 🕶️ ")
    console.log(data)
    
}

registerForm.addEventListener("submit", manejarFormulario)



