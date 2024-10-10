/* El Mapa de la Tierra Media (DOM)
Crea un mapa interactivo de la Tierra Media donde al hacer clic en un reino (Mordor, Rohan,
Gondor), aparezca una alerta mostrando el nombre del reino. */

// Selección de los reinos por su id
const mordor = document.getElementById('mordor');
const rohan = document.getElementById('rohan');
const gondor = document.getElementById('gondor');
const eriador = document.getElementById('eriador');

// Añadir eventos de clic para mostrar alertas con el nombre del reino
mordor.addEventListener('click', function() {
    alert('Mordor es un país situado al sureste de la Tierra Media, que tuvo gran importancia durante la Guerra del Anillo por ser el lugar donde Sauron, el Señor Oscuro, decidió edificar su fortaleza de Barad-dûr para intentar atacar y dominar a todos los pueblos de la Tierra Media. Se trata de una región desolada, rodeada de montañas con un interior desértico sin vegetación.');
});

rohan.addEventListener('click', function() {
    alert('Rohan es un reino fundado por los Hombres del Norte, los Eorlingas, que ocupa las grandes llanuras cubiertas de pastos situadas al norte de las Montañas Blancas y al este de las Montañas Nubladas. Sus habitantes descienden de los hombres de Éothéod, y se caracterizan por ser amantes de los caballos y por ser los principales aliados del reino de Gondor. Tiene especial concurrencia en los acontecimientos de El Señor de los Anillos, pues los Rohirrim constituyen uno de los principales bandos que luchan contra Sauron.');
});

gondor.addEventListener('click', function() {
    alert('Gondor es el nombre que recibió el reino del exilio del Sur que fue fundado después de la Caída de Númenor por Isildur y su hermano Anárion.');
});

eriador.addEventListener('click', function() {
    alert('Eriador fue el antiguo nombre de todas las tierras comprendidas entre las Montañas Nubladas y lasMontañas Azules ; al sur limitaba con el Aguada Gris y el Glanduin que desemboca en él por encima de Tharbad.');
});