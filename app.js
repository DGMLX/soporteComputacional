const loader = document.querySelector(".loader");
window.addEventListener("load",vanish);
function vanish(){
    loader.classList.add("disappear");
}

const intersection1 = document.getElementById("intersection1");
const intersection2 = document.getElementById("intersection2");
const intersection3 = document.getElementById("intersection3");
const intersection4 = document.getElementById("intersection4");
const intersection5 = document.getElementById("intersection5");
const intersection6 = document.getElementById("intersection6");
const intersection7 = document.getElementById("intersection7");
const intersection8 = document.getElementById("intersection8");
const intersection9 = document.getElementById("intersection9");
const intersection10 = document.getElementById("intersection10");

const cargarIntersection = entradas=>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("estilo-intersection");
            entrada.target.classList.add("visible");
        }
    }
    )
}

const cargarIntersection2 = entradas=>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("estilo-intersection2");
            entrada.target.classList.add("rotacion");
        }
    })
}


const observador = new IntersectionObserver(cargarIntersection,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);

const observador2 = new IntersectionObserver(cargarIntersection2,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
});


observador.observe(intersection1);
observador.observe(intersection2);
observador.observe(intersection3);
observador.observe(intersection4);
observador2.observe(intersection5);
observador2.observe(intersection6);
observador2.observe(intersection7);
observador2.observe(intersection8);
observador2.observe(intersection9);
observador2.observe(intersection10);



//document.oncontextmenu = function (){
  //  return false
//}