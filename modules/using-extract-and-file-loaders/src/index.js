// tag::content[]
require('./index.html');
require('./styles.css');
require('./favicon.ico');
// end::content[]

document.getElementById('app').innerHTML = `
  <h1>Hey! Оно светится!</h1>
`;
