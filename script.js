const lbl=document.getElementsByClassName('frm-cnt__lbl');
const inputEmail= document.getElementById('inputEmail');
const btn= document.getElementById('btn');

const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

inputEmail.addEventListener('change',()=> {
    if(!regex.test(inputEmail.value)){
        console.log(lbl);
        lbl[0].classList.add('frm-cnt__lbl--invalid');
        inputEmail.classList.add('frm-cnt__correo--invalid');
        btn.classList.remove('frm-cnt__btn--valid');
        return
    }else{
        lbl[0].classList.remove('frm-cnt__lbl--invalid');
        inputEmail.classList.remove('frm-cnt__correo--invalid');
        btn.classList.add('frm-cnt__btn--valid');
        return
    }
})

function redirection(){
    window.location.href='/success.html';
    return false
}
