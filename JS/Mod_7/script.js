const formulario = document.getElementById('meuFormulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const valorA = parseFloat(campoA.value);
  const valorB = parseFloat(campoB.value);

  if (valorB > valorA) {
    resultado.textContent = 'Formulário válido.';
    resultado.style.color = 'green';
  } else {
    resultado.textContent = 'Formulário inválido.';
    resultado.style.color = 'red';
  }
});