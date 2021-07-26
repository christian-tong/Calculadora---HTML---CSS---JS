<<<<<<< HEAD
let screen = document.querySelector("#screen-result");

function getData(ref) {
  let value = ref.value;
  screen.value += value;
}

function clean() {
  screen.value = "";
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "ERROR ONII CHAN";
    setTimeout(() => {
      clean();
    }, 500);
  }
}
=======
let screen = document.querySelector("#screen-result");

function getData(ref) {
    let value = ref.value;
    screen.value += value;
}

function clean() {
    screen.value = "";
}

function calculate() {

    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'ERROR ONII CHAN';
        setTimeout(() => {
            clean();
        }, 500);
    }

}
>>>>>>> 15fddc7023014d4ea43469b125e122238ef43628
