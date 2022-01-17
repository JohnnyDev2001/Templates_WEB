const w = document.getElementById('id1');
const a = document.getElementById('id2');
const s = document.getElementById('id3');
const d = document.getElementById('id4');
const view = document.querySelector('.view');

w.onclick = () => {
     view.innerHTML = "Frente";
}

a.onclick = () => {
    view.innerHTML = "Lado direito";
}

s.onclick = () => {
    view.innerHTML = "Tras";
}

d.onclick = () => {
    view.innerHTML = "Lado esquerdo";
}