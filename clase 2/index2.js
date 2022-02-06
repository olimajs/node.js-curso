const fs = require ('fs'); //permite intereactuar con archivos en nuestro sistema, crear o modificar,etc.

fs.readFile('./texto.txt', function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data.toString());   //de nuevo esto es asincrono, para poder seguir esribiendo modulos abajo. 
        
})



/* fs.writeFile('./texto.txt', 'linea uno', function (err){
    if (err) {
        console.log(err);                //esto es codigo asincrono
    }                                   //aca metemos un callback, cuando terminamos de crear el archivo anterior pasamos a ejecutar la funcion
    console.log('Archivo creado'); 
});
console.log ('ultima linea de codigo');
*/
//ejecutando el node index2.js en consola se crea el text file


/*
cons users = query ('SELECT * FROM Users?)
*/

/*
query ('SELECT * FROM Users', function (err,users) {
    if (err) {
        console.log(err)
    }
    if (users) {
                    en node usamos mucho este tipos de funcines, ya que es más didrecto de ir al codigo, para utilizar metodos que node no se encarga de hacer ej: consulta a bdd
    }
})    
*/