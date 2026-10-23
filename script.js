// Filtros de la sección Trabajos
document.querySelectorAll('.filtro').forEach(function (boton) {
  boton.addEventListener('click', function () {
    document.querySelectorAll('.filtro').forEach(function (b) { b.classList.remove('activo'); });
    boton.classList.add('activo');
    var filtro = boton.dataset.filtro;
    document.querySelectorAll('.trabajo').forEach(function (t) {
      t.classList.toggle('oculto', filtro !== 'todo' && t.dataset.cat !== filtro);
    });
  });
});

// Formulario de contacto: arma el mensaje y abre el mail o WhatsApp
var form = document.getElementById('formulario');
var via = 'mail';
form.querySelectorAll('button[data-via]').forEach(function (b) {
  b.addEventListener('click', function () { via = b.dataset.via; });
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var nombre = form.nombre.value.trim();
  var marca = form.marca.value.trim();
  var mensaje = form.mensaje.value.trim();
  var texto = 'Hola Pia! Soy ' + nombre + (marca ? ' de ' + marca : '') + '.\n\n' + mensaje;
  if (via === 'whatsapp') {
    window.open('https://wa.me/' + form.dataset.whatsapp + '?text=' + encodeURIComponent(texto), '_blank');
  } else {
    var asunto = 'Consulta desde la web' + (marca ? ' - ' + marca : '');
    window.location.href = 'mailto:' + form.dataset.mail + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(texto);
  }
});
