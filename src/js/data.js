// let comida={
  // COMMA: {
  //   name: 'Comma De Todo un Poco',
  //   food: ['comida saludable', 'comida vegetariana', 'café', 'ensaladas'],
  //   address: 'Av. Victor Andrés Belaúnde 276, San Isidro 15073',
  //   price: 'S/.20 a S/.30',
  //   image: '../assets/images/comma.jpg'
  // },
// BUCHER: {
//   food:["hamburguesa", "papas", "ensaladas", "soda italiana"],
//   zone:"Centro",
//   place:"Bucher and Sons",
//   phone:"55101313",
//   review:"Brutcher and Sons ofrece hamburguesas preparadas de manera única en un ambiente acogedor; encuéntralas en las sucursales de Polanco, Roma, Alameda, Pedregal",
//   address:"Calle Madero 33",
//   image:"../image/burguer.jpg"
// },
// CAIPIRINHA: {
//     food:"Brasileña",
//     zone:"Centro",
//     place:"Caipirinha",
//     phone:"26439000",
//     review:"La barra de ensaladas ofrece numerosas alternativas y más de 40 aderezos para completarlas; entre las recomendaciones están las papitas cambray asadas en la churrasca, además de la feijoada tradicional platillo brasileño con frijoles y arroz, que aquí acompañan con carne seca. ",
//     address:"Vía Gustavo Baz Prada 43"
// },
// AZULEJOS: {
//   food:"Mexicana",
//   zone:"Centro",
//   place:"Los Azulejos",
//   phone:"55121331",
//   review:"El lugar se convirtió en un restaurante donde no importa a que hora del día es una excelente opción para comer en la casa de Los Azulejos. Este se encuentra en el Centro Histórico de México y se especializan en la comida mexicana.",
//   address:"Francisco I. Madero 4, Centro."
// },
// CAFE: {
//   food:"Café",
//   zone:"Centro",
//   place:"Café el popular",
//   phone:"55186081/ 55128523",
//   review:"El café popular es un restaurante de comida mexicana por tradición y por excelencia, ubicado en su casona de 5 de mayo 52, del Centro Histórico de la Ciudad de México desde 1948. pertenecientes a los restaurantes de México en los años 30's y 40's se continúan manteniendo los precios económicos en desayunos comidas y cenas como lo establece la tradición de los cafés chinos.",
//   address:"5 De Mayo 52"
// },
// BAR: {
//   food:"Bar",
//   zone:"Centro",
//   place:"Bar Mancera",
//   phone:"55219755",
//   review:"Hay algunos bares muy elegantes en la ciudad de México, hay bares refinados, bares hechos de pura madera. Más allá de todos ellos, pero con cada una de sus características, está el Mancera, una joyita de principios del siglo XX. El restaurante esta ubicado en el Centro Histórico y se especializa en la comida mexicana.",
//   address:"Venustiano Carranza 49"
// }
// };
const url= "../data/menu.json";
window.onload = () =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderInfo(data);
    })
    .catch(error =>{
        console.log("error");
    })

}
