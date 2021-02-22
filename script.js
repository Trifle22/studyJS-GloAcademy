const city = ['msk', 'spb', 'pekin'];

const fixCity = city.map(city => city[0].toUpperCase + city.slice(1));

console.log(fixCity);