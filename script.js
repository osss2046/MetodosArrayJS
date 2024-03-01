document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí

// 1_
// Para agregar horas a traumatologia usamos push

traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '1222141-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONAS5A'}
);

// luego ordenamos el arreglo usando el metodo sort, de modo que usando la hora se ordenan de más temprano a más tarde

traumatologia.sort((a, b) => {
    return a.hora.localeCompare(b.hora);
});

// 2_

// Para quitar el primer registro del arreglo usamos el metodo shift
// Para quitar el ultimo registro del arreglo usamos el metodo pop

radiologia.shift()
radiologia.pop()


// 3_

// Para imprimir los registros del arreglo de consulta medica dental, usamos el metodo forEach,
// este nos permite para cada cita hacer una variable con todos los datos separados por un guión y luego
// mostrarlos usando el document.write


dental.forEach(function(cita) {
    var datosCita = `${cita.hora} - ${cita.especialista} - ${cita.paciente} - ${cita.rut} - ${cita.prevision}`;
    document.write(`<p>${datosCita}</p>`);
});

// 4_
// imprimir todo los nombres de los pacientes, primero concadenamos los 3 arreglos en 1 solo usando concat
// Luego para mostrar los nombres usamos forEach

var nuevoArreglo = radiologia.concat(traumatologia)
nuevoArreglo = nuevoArreglo.concat(dental)
nuevoArreglo.forEach(function(nombre){
    var nombres = nombre.paciente
    document.write(`<p>${nombres}</p>`)
})


// 5_
// filtrar todos los registros del arreglo llamado dental que sean Isapre, usando el metodo filter
var dentalIsapre = dental.filter(function(name){
    return name.prevision == 'ISAPRE';
});
// luego de filtrar, lo anterior queda guardado en la variable 'dentalIsapre' y para mostrarlo 1 por 1 usamos 
// el metodo forEach

dentalIsapre.forEach(function(cita){
    document.write(`<p>${cita.paciente} - ${cita.prevision}</p>`);
});



// 6_
// igualmente que en el ejercicios anterior
// filtrar todos los registros de traumatologia que sean fonasa
var traumatologiaFonasa = traumatologia.filter(function(name){
    return name.prevision == 'FONASA';
});

// con forEach mostramos estos
traumatologiaFonasa.forEach(function(cita){
    document.write(`<p>${cita.paciente} - ${cita.prevision}</p>`);
});





//Agregar código para el desafio 2 aquí




document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);
