
//variables html con js
const ctx = document.getElementById('myChart').getContext('2d');

//conexión con backend
const url = 'https://localhost:7087/stock';
fetch(url).then(resp => resp.json())
    .then(data => {
        console.log(data);
        const beer = data.map(x => x.name); //obtencion de los nombres de cervezas
        const quantity = data.map(x => x.quantity); //obtencion de la cantidad de cervezas

        const colors = data.map(x => //creara colores aleatorios segun los datos de bd 'rgba(255, 99, 132, 0.2)'
            `rgba(${getRandomColor(255,0)}, 
             ${getRandomColor(255,0)}, 
             ${getRandomColor(255,0)}, 1)`
        );

    //Uso de chartJs ejemplo
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: beer, //valores
            datasets: [{
                label: 'Cervezas', //nombre de grafica
                data: quantity, //cantidad
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});

//colores random (entre 0 y 255 para colores rgb)
function getRandomColor(max, min) {
    return Math.random() * (max - min) + min;
}



//Ejemplo chart.js del que se baso todo

//  const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// }); 

