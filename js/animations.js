const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i+=100;
        setTimeout(()=>increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
    }
}

function initIncreaseNumberAnimation() {
    let i = 0;
    let endNumber = 5000;
    let element = document.querySelector(".features__clients-count");
    increaseNumberAnimationStep(i, element, endNumber);
}

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      const formContainer = document.createElement('div');
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input');
   
      const input = document.createElement('input');
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
   
      formContainer.appendChild(input);
      document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); 
    }
   
    if (event.target.value !== 'other') {
      const otherInput = document.querySelector(".form__other-input");
      if (event.target.value !== "other" && Boolean(otherInput)){
        document.querySelector('#form form').removeChild(otherInput);
      }
    }
  });


window.addEventListener('scroll', updateScroll);
function updateScroll(){
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header__scrolled");
  } else {
    document.querySelector("header").classList.remove("header__scrolled");
  }

  // Запуск анимации увеличения числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited){
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}

function addSmoothScroll(link) {
  link.addEventListener('click', onLinkClick);
}

function onLinkClick(event) {
  event.preventDefault();
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});

document.querySelectorAll('button[href^="#"]').forEach(button => {
  addSmoothScroll(button);
});