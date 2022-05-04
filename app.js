const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Se han leido los datos correctamente');

        // sacar los datones que es importante
        var data = response.data.bpi
        
        var USD = [
            `${data.USD.code} `+`${data.USD.rate}`,
        ]
        
        var EUR = [
            `${data.EUR.code} `+`${data.EUR.rate}`,
        ]

        var GBP = [
            `${data.GBP.code} `+`${data.GBP.rate}`,
        ]
        

       console.log("El valor del BitCoin es:");
    
       USD.forEach(datos=>console.log("Valor del USD: " , datos));
       EUR.forEach(datos=>console.log("Valor del Eur: " , datos));
       GBP.forEach(datos=>console.log("Valor del GBP: " , datos));
        

       
    })