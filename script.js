const inputEmail= document.getElementById('inputEmail');
const btn= document.getElementById('btn');

const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

inputEmail.addEventListener('change',()=> {
    if(!regex.test(inputEmail.value)){
        inputEmail.classList.add('frm-cnt__correo--invalid');
        btn.classList.remove('frm-cnt__btn--valid');
        return
    }else{
        btn.classList.add('frm-cnt__btn--valid');
        return
    }
})

