//  register user
let username=document.querySelector('#username')
let emial=document.querySelector('#email')
let password=document.querySelector('#password')
let btn_submit=document.querySelector('#submit')
let message=document.querySelector('#message')
// click register btn
btn_submit.addEventListener('click',register)

// register 
function register(e){
  e.preventDefault()
     if(username.value=='' && emial.value=='' || password.value==''){
         message.style.display='block'
       message.innerHTML='Please fill in the fields'
     }else{
       localStorage.setItem('username',username.value.trim())
       localStorage.setItem('emial',emial.value)
       localStorage.setItem('password',password.value.trim())
       if(localStorage.getItem('username')){
        let loadres=document.querySelector('#loaders')
        loadres.style.display='block'
           setTimeout(() => {
              loadres.style.display='none'
              window.location='../login/login.html'
           }, 1500);
       }
     }
}