
window.onload = function() {
    console.log("carergou")
    var input = document.querySelector('input');
    input.addEventListener('change', () => {
        if(input) input.addEventListener('change', changeColor())
});
}


function changeColor(){
    console.log("changeColor")

    // document.body.classList.toggle('dark')
    document.querySelector('.header').classList.toggle('dark')
    document.querySelector('.main').classList.toggle('dark')
    document.querySelector('.main-texts').classList.toggle('dark')
    document.querySelector('#box-1').classList.toggle('dark')
    document.querySelector('#box-2').classList.toggle('dark')
    document.querySelector('#box-3').classList.toggle('dark')
    document.querySelector('#box-4').classList.toggle('dark')
    document.querySelector('#box-5').classList.toggle('dark')
    document.querySelector('#box-6').classList.toggle('dark')
    document.querySelector('.publico').classList.toggle('dark')
    document.querySelector('.title').classList.toggle('dark')
    document.querySelector('.sobre').classList.toggle('dark')
    document.querySelector('.sobre-texts').classList.toggle('dark')
    document.querySelector('#servicos').classList.toggle('dark')
    document.querySelector('#servicos-text').classList.toggle('dark')
    document.querySelector('footer').classList.toggle('dark')
    document.querySelector('.footer-texts').classList.toggle('dark')
    document.querySelector('.footer-dev').classList.toggle('dark')
}

function sendData(){
    var name = document.querySelector('#name').value;
    if(!name){
        name.innerText  = 'sfsadf'
    }else{
        Swal.fire({
            title: 'Sucesso!',
            text: `Um email será envaido para ${name}`,
            icon: 'success',
            confirmButtonText: 'Fechar'
          })
    }
}