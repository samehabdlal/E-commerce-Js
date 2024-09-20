let username=document.querySelector('#username')
let password=document.querySelector('#password')
let btnlogin=document.querySelector('#login')
let message=document.querySelector('#message')
//  clikc login and redirect home bage
btnlogin.addEventListener('click',login)
// login 
function login(e){
    e.preventDefault()
   let userlocal=localStorage.getItem('username')
   let passwordlocal=localStorage.getItem('password')
    if(password.value=='' && username.value==''){
       message.style.display='block'
       message.innerHTML='Please fill in the fields'
    }
    else if((userlocal==username.value.trim()) && (passwordlocal==password.value.trim())){
        
      let loadres=document.querySelector('#loaders')
      loadres.style.display='block'
         setTimeout(() => {
            loadres.style.display='none'
            window.location='../../home/home.html'
         }, 1500);
    }
    else{
        if(passwordlocal !==password.value ){
        message.style.display='block'
      message.innerHTML='password is incorrect'
        }
        else if( userlocal !==username.value){
            message.style.display='block'
           message.innerHTML='This name is not registered'
         }
    }
}