document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
      const getCar = () => {
        return new Promise((resolve, reject) => {
          const request = new XMLHttpRequest();
          request.open('GET', './cars.json');
          request.setRequestHeader('Content-type', 'application/json');
          request.send();
          request.addEventListener('readystatechange', () => {
              if (request.status === 200) {
                if (request.responseText) {
                  const data = JSON.parse(request.responseText);
                  console.log(data);
                  resolve(data);
                }
              } else {
                reject(Error);
              }
          });
        })
      }

      getCar()
      .then((data) => {
        data.cars.forEach(item => {
          if (item.brand === select.value) {
              const {brand, model, price} = item;
              output.innerHTML = `Тачка ${brand} ${model} <br>
              Цена: ${price}$`;
          }
      });
      })
      .catch((error) => {
        console.log(error);
        output.innerHTML = error;
      })

    });
    
});