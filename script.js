let theme = document.getElementById('SUN');
let body = document.querySelector('body');
let h3 = document.getElementById('cap');

theme.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background='white';
        body.style.color = 'black';
        body.style.transition='2s';
        h3.textContent='brightness mode on';
    }else{
        body.style.background='black';
        body.style.color = 'white';
        body.style.transition='2s';
        h3.textContent='Darkness mode on';
    }
    
    
})
//"toggle" typically refers to the action of changing the state of an element, such as a button, checkbox, or dropdown menu,
// from one state to another when it is clicked or otherwise activated.