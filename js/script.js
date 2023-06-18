function writeTitle(){
    function activeWorld(element){
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((letra, i) =>{
            setTimeout(()=>{
                element.innerHTML += letra;
            }, 75 * i);
        })
    }
    const title = document.querySelector('.digitando');
    activeWorld(title);
}
writeTitle();


function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
menuMobile();

const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('.active');
    });
    buttomGeral[index].classList.add('.active')
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})


function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}
