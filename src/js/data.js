const url= "https://raw.githubusercontent.com/zabarca/cdmx-2018-06-bc-core-pm-foodmap/master/src/data/menu.json";
function renderInfo (data) {
    //let result = "";
    console.log(Object.values(data)[0]);
       const info = Object.values(data)[0];
       let result = "";
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
        document.getElementById('tarjeta').innerHTML=result;
        // container.innerHTML=result;
   //});
}
document.getElementById('delete').addEventListener('click', (event) =>{
  container.innerHTML = '';
})
window.onload = () =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let x= document.getElementById("btn");
        x.addEventListener("click",(event) => {
      renderInfo(data);
      });
    });
    // .catch(error =>{
    //      console.log("error");
    // });

};
