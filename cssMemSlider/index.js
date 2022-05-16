const slides = document.querySelectorAll('.slide'),
      points = document.querySelectorAll('.point'),
      text = document.getElementById('text');

let array = ['Of course =(', 'That\'s right!', 'Sorry Max xD', 'Think about it!'];

const slideActive = current => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[current].classList.add('active');
    text.innerHTML = array[current];
}

const pointActive = current => {
    for(let point of points) {
        point.classList.remove('active');
    }
    points[current].classList.add('active');
}

const pOne = document.querySelector('.point_one'),
      pTwo = document.querySelector('.point_two'),
      pThree = document.querySelector('.point_three'),
      pFour = document.querySelector('.point_four'),

      one = document.querySelector('.one'),
      two = document.querySelector('.two'),
      three = document.querySelector('.three'),
      four = document.querySelector('.four');

const activeGhostButtonOne = () => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[0].classList.add('active');
    one.classList.add('active');
    two.classList.remove('active');
    three.classList.remove('active');
    four.classList.remove('active');
    text.innerHTML = array[0];
}

const activeGhostButtonTwo = () => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[1].classList.add('active');
    one.classList.remove('active');
    two.classList.add('active');
    three.classList.remove('active');
    four.classList.remove('active');
    text.innerHTML = array[1];
}

const activeGhostButtonThree = () => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[2].classList.add('active');
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.add('active');
    four.classList.remove('active');
    text.innerHTML = array[2];
}

const activeGhostButtonFour = () => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[3].classList.add('active');
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.remove('active');
    four.classList.add('active');
    text.innerHTML = array[3];
}

pOne.addEventListener('click',  activeGhostButtonOne);
pTwo.addEventListener('click', activeGhostButtonTwo);
pThree.addEventListener('click', activeGhostButtonThree);
pFour.addEventListener('click', activeGhostButtonFour);