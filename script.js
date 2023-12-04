const inputEmail= document.getElementById('inputEmail');
const btn= document.getElementById('btn');

const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

inputEmail.addEventListener('change',()=> {
    if(!regex.test(inputEmail.value)){
        alert('es falso');
    //    inputEmail.classList.add('.frm-cnt__correo--invalid');
        return
    }else{
        alert('es true')
    //    btn.classList.add('.frm-cnt__correo--valid');
        return
    }
})

