const email = document.querySelector('.email');
const boton = document.querySelector('.boton');
const error = document.querySelector('.error');
const mensaje = document.querySelector('.mensaje-error');
const enviado = document.querySelector('.enviado');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value === "") {
        mensaje.textContent = "Email cannot be empty"
        error.classList.add('active');
        enviado.classList.remove('active');
    } 

    else if (email.value.match(validEmail)) {
        error.classList.remove('active');
        enviado.classList.add('active')
    } else {
        mensaje.textContent = "Please use a valid email adress"
        error.classList.add('active')
        enviado.classList.remove('active')
    }
    
})