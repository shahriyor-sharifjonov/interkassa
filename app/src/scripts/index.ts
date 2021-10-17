function addActive(el){
    el.classList.toggle('active')
}

window.addEventListener('click', function(e :any) {
    if(e.target.classList.contains('login__dropdown-item')) {
        const dropBtn = document.querySelectorAll('.login__dropdown-btn');
        dropBtn.forEach(el => {
            el.classList.remove('active')
        });
    }
})