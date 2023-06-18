
function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
menuMobile();

