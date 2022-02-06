/*"require('os');" este modúlo 'os' no permite trabajar con el sistema operativo, ver en q plataforma estamos ejecutando,etc.*/

const os = require('os');

// "require ('server')"  //es muy tipico en nodejs, que a los modulos al momentos de requerirlos los llamamos así


//metodos con los cuales trabajamos en este modulo- pre instalado en node.js :
console.log(os.platform()); //en que s.o trbajamos
console.log(os.release()); //en que version de win
console.log('free mem: ',os.freemem()); //cuanta memory libre tenemos
console.log('Total mem: ',os.totalmem()); //memoria total

