require('./styles.css');
require('./styles.scss');
require('./styles.sass');

document.getElementById('app').innerHTML = `
  <h1>Hey! Оно светится!</h1>
`;

console.log('you on', process.env.NODE_ENV, 'env');
