// alert("Приветствуем, дорогой гость!");

// Анимация при скролле
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      // setTimeout(() => {
        // change.target.classList.remove('element-show');
      // }, 1000)
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}
// ------------

const myInput = document.getElementById("basket-left-input-1");
function stepper1(btn) {
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step * 1) : (step * -1);
    let newValue = parseInt(val) + calcStep;
    if(newValue >= min && newValue <= max) {
      myInput.setAttribute("value", newValue);
    }

    // console.log(id, calcStep);
    // console.log(id,min,max,step,val);
}

const myInput2 = document.getElementById("basket-left-input-2");
function stepper2(btn) {
    let id = btn.getAttribute("id");
    let min = myInput2.getAttribute("min");
    let max = myInput2.getAttribute("max");
    let step = myInput2.getAttribute("step");
    let val = myInput2.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;
    if(newValue >= min && newValue <= max) {
        myInput2.setAttribute("value", newValue);
    }

    // console.log(id, calcStep);
    // console.log(id,min,max,step,val);
}


// Клик для сердечка Index


let count_I1_1 = 0;
function redHeart_I1_1() {
  const green = document.getElementById("bag-click-color-I1_1");
  if(count_I1_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_I1_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I1_1++;
    alert('Класс! Товар в корзине!');
  }
}
let count_I1_2 = 0;
function redHeart_I1_2() {
  const red = document.getElementById("heart-click-color-I1_2");
  if(count_I1_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_I1_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I1_2++;
  }
}

// 

let count_I2_1 = 0;
function redHeart_I2_1() {
  const green = document.getElementById("bag-click-color-I2_1")
  if(count_I2_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_I2_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I2_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I2_2 = 0;
function redHeart_I2_2() {
  const red = document.getElementById("heart-click-color-I2_2");
  if(count_I2_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_I2_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I2_2++;
  }
}

// 

let count_I3_1 = 0;
function redHeart_I3_1() {
  const green = document.getElementById("bag-click-color-I3_1")
  if(count_I3_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_I3_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I3_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I3_2 = 0;
function redHeart_I3_2() {
  const red = document.getElementById("heart-click-color-I3_2");
  if(count_I3_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_I3_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I3_2++;
  }
}

// 

let count_I4_1 = 0;
function redHeart_I4_1() {
  const green = document.getElementById("bag-click-color-I4_1")
  if(count_I4_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_I4_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I4_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I4_2 = 0;
function redHeart_I4_2() {
  const red = document.getElementById("heart-click-color-I4_2");
  if(count_I4_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_I4_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I4_2++;
  }
}

// 

let count_I5_1 = 0;
function redHeart_I5_1() {
  const green = document.getElementById("bag-click-color-I5_1")
  if(count_I5_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_I5_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I5_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I5_2 = 0;
function redHeart_I5_2() {
  const red = document.getElementById("heart-click-color-I5_2");
  if(count_I5_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_I5_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I5_2++;
  }
}

// 

let count_I6_1 = 0;
function redHeart_I6_1() {
  const green = document.getElementById("bag-click-color-I6_1")
  if(count_I6_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_I6_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I6_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I6_2 = 0;
function redHeart_I6_2() {
  const red = document.getElementById("heart-click-color-I6_2");
  if(count_I6_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_I6_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I6_2++;
  }
}

// 

let count_I7_1 = 0;
function redHeart_I7_1() {
  const green = document.getElementById("bag-click-color-I7_1")
  if(count_I7_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_I7_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I7_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I7_2 = 0;
function redHeart_I7_2() {
  const red = document.getElementById("heart-click-color-I7_2");
  if(count_I7_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_I7_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I7_2++;
  }
}

// 

let count_I8_1 = 0;
function redHeart_I8_1() {
  const green = document.getElementById("bag-click-color-I8_1")
  if(count_I8_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_I8_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I8_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I8_2 = 0;
function redHeart_I8_2() {
  const red = document.getElementById("heart-click-color-I8_2");
  if(count_I8_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_I8_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I8_2++;
  }
}

// 

let count_I9_1 = 0;
function redHeart_I9_1() {
  const green = document.getElementById("bag-click-color-I9_1")
  if(count_I9_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_I9_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_I9_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_I9_2 = 0;
function redHeart_I9_2() {
  const red = document.getElementById("heart-click-color-I9_2");
  if(count_I9_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_I9_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_I9_2++;
  }
}

//   Клик для сердечка Catalog

let count_C1_1 = 0;
function redHeart_C1_1() {
  const green = document.getElementById("bag-click-color-C1_1")
  if(count_C1_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_C1_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C1_1++;
    alert('Отличный вкус! Товар ждёт в корзине!')
  }
}
let count_C1_2 = 0;
function redHeart_C1_2() {
  const red = document.getElementById("heart-click-color-C1_2");
  if(count_C1_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_C1_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C1_2++;
  }
}

// 

let count_C2_1 = 0;
function redHeart_C2_1() {
  const green = document.getElementById("bag-click-color-C2_1")
  if(count_C2_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_C2_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C2_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C2_2 = 0;
function redHeart_C2_2() {
  const red = document.getElementById("heart-click-color-C2_2");
  if(count_C2_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_C2_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C2_2++;
  }
}

// 

let count_C3_1 = 0;
function redHeart_C3_1() {
  const green = document.getElementById("bag-click-color-C3_1")
  if(count_C3_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_C3_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C3_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C3_2 = 0;
function redHeart_C3_2() {
  const red = document.getElementById("heart-click-color-C3_2");
  if(count_C3_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_C3_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C3_2++;
  }
}

// 

let count_C4_1 = 0;
function redHeart_C4_1() {
  const green = document.getElementById("bag-click-color-C4_1")
  if(count_C4_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_C4_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C4_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C4_2 = 0;
function redHeart_C4_2() {
  const red = document.getElementById("heart-click-color-C4_2");
  if(count_C4_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_C4_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C4_2++;
  }
}

// 

let count_C5_1 = 0;
function redHeart_C5_1() {
  const green = document.getElementById("bag-click-color-C5_1")
  if(count_C5_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_C5_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C5_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C5_2 = 0;
function redHeart_C5_2() {
  const red = document.getElementById("heart-click-color-C5_2");
  if(count_C5_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_C5_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C5_2++;
  }
}

// 

let count_C6_1 = 0;
function redHeart_C6_1() {
  const green = document.getElementById("bag-click-color-C6_1")
  if(count_C6_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_C6_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C6_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C6_2 = 0;
function redHeart_C6_2() {
  const red = document.getElementById("heart-click-color-C6_2");
  if(count_C6_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_C6_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C6_2++;
  }
}

// 

let count_C7_1 = 0;
function redHeart_C7_1() {
  const green = document.getElementById("bag-click-color-C7_1")
  if(count_C7_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_C7_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C7_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C7_2 = 0;
function redHeart_C7_2() {
  const red = document.getElementById("heart-click-color-C7_2");
  if(count_C7_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_C7_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C7_2++;
  }
}

// 

let count_C8_1 = 0;
function redHeart_C8_1() {
  const green = document.getElementById("bag-click-color-C8_1")
  if(count_C8_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_C8_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C8_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C8_2 = 0;
function redHeart_C8_2() {
  const red = document.getElementById("heart-click-color-C8_2");
  if(count_C8_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_C8_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C8_2++;
  }
}

// 

let count_C9_1 = 0;
function redHeart_C9_1() {
  const green = document.getElementById("bag-click-color-C9_1")
  if(count_C9_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_C9_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C9_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C9_2 = 0;
function redHeart_C9_2() {
  const red = document.getElementById("heart-click-color-C9_2");
  if(count_C9_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_C9_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C9_2++;
  }
}

// 

let count_C10_1 = 0;
function redHeart_C10_1() {
  const green = document.getElementById("bag-click-color-C10_1")
  if(count_C10_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_C10_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C10_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C10_2 = 0;
function redHeart_C10_2() {
  const red = document.getElementById("heart-click-color-C10_2");
  if(count_C10_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_C10_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C10_2++;
  }
}

// 

let count_C11_1 = 0;
function redHeart_C11_1() {
  const green = document.getElementById("bag-click-color-C11_1")
  if(count_C11_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_C11_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C11_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C11_2 = 0;
function redHeart_C11_2() {
  const red = document.getElementById("heart-click-color-C11_2");
  if(count_C11_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_C11_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C11_2++;
  }
}

// 

let count_C12_1 = 0;
function redHeart_C12_1() {
  const green = document.getElementById("bag-click-color-C12_1")
  if(count_C12_1 % 2) {
    green.setAttribute("fill", "#EAEBEC");
    count_C12_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_C12_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_C12_2 = 0;
function redHeart_C12_2() {
  const red = document.getElementById("heart-click-color-C12_2");
  if(count_C12_2 % 2) {
    red.setAttribute("fill", "#EAEBEC");
    count_C12_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_C12_2++;
  }
}

// 


// Клик для сердечка Basket

let count_B1_1 = 0;
function redHeart_B1_1() {
  const green = document.getElementById("bag-click-color-1")
  if(count_B1_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_B1_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_B1_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_B1_2 = 0;
function redHeart_B1_2() {
  const red = document.getElementById("heart-click-color-1");
  if(count_B1_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_B1_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_B1_2++;
  }
}

// 

let count_B2_1 = 0;
function redHeart_B2_1() {
  const green = document.getElementById("bag-click-color-2")
  if(count_B2_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_B2_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_B2_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_B2_2 = 0;
function redHeart_B2_2() {
  const red = document.getElementById("heart-click-color-2");
  if(count_B2_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_B2_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_B2_2++;
  }
}

// 

let count_B3_1 = 0;
function redHeart_B3_1() {
  const green = document.getElementById("bag-click-color-3")
  if(count_B3_1 % 2) {
    green.setAttribute("fill", "#C4C4C4");
    count_B3_1++;
  } else {
    green.setAttribute("fill", "#59DF73");
    count_B3_1++;
    alert('Класс! Товар в корзине!')
  }
}
let count_B3_2 = 0;
function redHeart_B3_2() {
  const red = document.getElementById("heart-click-color-3");
  if(count_B3_2 % 2) {
    red.setAttribute("fill", "#C4C4C4");
    count_B3_2++;
  } else {
    red.setAttribute("fill", "#ff0000");
    count_B3_2++;
  }
}
