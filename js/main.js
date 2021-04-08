const singlePlay = document.querySelector("#singlePlay");
const multiplay = document.querySelector("#multiplay");
const multi = document.querySelector(".multi");
const nomePlay1 = document.querySelector("#nomePlay1");
const nomePlay2 = document.querySelector("#nomePlay2");
const btn = document.querySelector("button");
const player2 = document.querySelector(".player2");
const login = document.querySelector('.login')
const canvas = document.querySelector('canvas')

singlePlay.addEventListener("click", (event) => {
  if (event.target.checked) {
    multiplay.setAttribute("hidden", "hidden");
    multi.setAttribute("hidden", "hidden");
    player2.setAttribute("hidden", "hidden");
    return;
  }
  multiplay.removeAttribute("hidden");
  multi.removeAttribute("hidden");
  player2.removeAttribute("hidden");
});

// multiplay.addEventListener('click', (event) => {
//   if(event.target.checked){
//     player2.removeAttribute('hidden')
//     return
//   }
//   player2.setAttribute('hidden','hidden')
// })

let usuarios = []

btn.addEventListener("click", (event) => {
  event.preventDefault();
  
  const form = document.querySelector("form");
  form.classList.add("fade");
  window.localStorage.setItem("nomePlay1", nomePlay1.value)
  
  setInterval(() => {
    login.setAttribute('hidden', 'hidden')
    window.location.href = "canvas.html"
  }, 1000);
});
