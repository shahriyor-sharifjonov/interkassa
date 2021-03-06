[].map.call(document.querySelectorAll('[anim="ripple"]'), (el) => {
    el.addEventListener("click", (e) => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(),
        d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;
      el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
        e.clientX - r.left
      }; --y:${e.clientY - r.top};`;
    });
  });

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
    if(e.target.classList.contains('header__link')) {
      menuToggle()
    }
})

// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};