const container = document.getElementById("result");
renderInfo= (data) => {
    let result = "";
   document.getElementById("btn").addEventListener("click",(event) => {
    let result = "";
    console.log(Object.values(data)[0]);
       const info = Object.values(data)[0];

       for(let i=0; i<info.length;i++){
           console.log(info[i]); //[i] la i da la info de cada nombre
           result += `<div class="card">
           <div class="info">
               <p>Lugar: ${info[i].place}</p>
               <p>Teléfono: ${info[i].phone}</p>
               <p>Reseña: ${info[i].review}</p>
               <p>Dirección: ${info[i].address}</p>
           </div>
       </div>`
}
        container.innerHTML=result;
   });
}
document.getElementById('delete').addEventListener('click', (event) =>{
  container.innerHTML = '';
})
