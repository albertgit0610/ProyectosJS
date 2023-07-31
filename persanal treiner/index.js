function calcularCaloriasDiarias() {
  const genero = document.getElementById('genero').value;
  const edad = parseInt(document.getElementById('edad').value);
  const altura = parseInt(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const actividad = document.getElementById('actividad').value;
  const objetivo = document.getElementById('objetivo').value;

  if (!genero || isNaN(edad) || isNaN(altura) || isNaN(peso) || !actividad || !objetivo) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const tmb = calcularTMB(genero, edad, altura, peso);
  const caloriasObjetivo = calcularCaloriasObjetivo(tmb, actividad, objetivo);

  const dietaRecomendada = generarDietaRecomendada(objetivo);
  const ejerciciosRecomendados = generarEjerciciosRecomendados(objetivo);

  const recomendaciones = {
    calorias: caloriasObjetivo,
    dieta: dietaRecomendada,
    ejercicios: ejerciciosRecomendados
  };

  mostrarRecomendaciones(recomendaciones);
}

function calcularTMB(genero, edad, altura, peso) {
  let tmb = 0;
  if (genero === 'masculino') {
    tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
  }
  return tmb;
}

function calcularCaloriasObjetivo(tmb, actividad, objetivo) {
  let caloriasObjetivo = 0;
  switch (actividad) {
    case 'sedentario':
      caloriasObjetivo = (objetivo === 'bajar') ? tmb * 0.8 : (objetivo === 'mantener') ? tmb * 1.1 : tmb * 1.3;
      break; 
    case 'ligera': 
      caloriasObjetivo = (objetivo === 'bajar') ? tmb * 1.0 : (objetivo === 'mantener') ? tmb * 1.3 : tmb * 1.5;
      break; 
    case 'moderada': 
      caloriasObjetivo = (objetivo === 'bajar') ? tmb * 1.2 : (objetivo === 'mantener') ? tmb * 1.5 : tmb * 1.7;
      break; 
    case 'activa': 
      caloriasObjetivo = (objetivo === 'bajar') ? tmb * 1.4 : (objetivo === 'mantener') ? tmb * 1.8 : tmb * 1.9;
      break; 
    case 'muyActiva': 
      caloriasObjetivo = (objetivo === 'bajar') ? tmb * 1.7 : (objetivo === 'mantener') ? tmb * 1.9 : tmb * 2.1;
      break;
    default:
      break;
  }
  return caloriasObjetivo;
}

function generarDietaRecomendada(objetivo) {
  let dieta = '';
  switch (objetivo) {
    case 'bajar':
      dieta = 'Coma alimentos bajos en calorías, como frutas y verduras. Evite alimentos altos en grasas y azúcares.';
      break;
    case 'mantener':
      dieta = 'Mantenga un equilibrio entre proteínas, carbohidratos y grasas saludables. Consuma una variedad de alimentos.';
      break;
    case 'subir':
      dieta = 'Aumente su consumo de calorías y proteínas para promover el crecimiento muscular. Consuma más alimentos ricos en nutrientes.';
      break;
    default:
      break;
  }
  return dieta;
}

function generarEjerciciosRecomendados(objetivo) {
  let ejercicios = [];
  switch (objetivo) {
    case 'bajar':
      ejercicios = [
        { nombre: 'Caminatas', imagen: 'caminatas.jpg' },
        { nombre: 'Entrenamiento de resistencia', imagen: 'resistencia.jpeg' },
        { nombre: 'Ejercicios cardiovasculares', imagen: 'cardio.jpeg' }
      ];
      break;
    case 'mantener':
      ejercicios = [
        { nombre: 'Entrenamiento de fuerza', imagen: 'calistenia.png' },
        { nombre: 'Yoga', imagen: 'yoga.jpeg' },
        { nombre: 'Natación', imagen: 'natacion.jpeg' }
      ];
      break;
    case 'subir':
      ejercicios = [
        { nombre: 'Entrenamiento de fuerza', imagen: 'fuerza.jpeg' },
        { nombre: 'Levantamiento de pesas', imagen: 'levantamiento1.jpg' },
        { nombre: 'Ejercicios compuestos', imagen: 'compuestos.jpeg' }
      ];
      break;
    default:
      break;
  }
  return ejercicios;
}

function mostrarRecomendaciones(recomendaciones) {
  const recomendacionesDiv = document.getElementById('recomendaciones');
  recomendacionesDiv.innerHTML = '';

  const caloriasDiv = document.createElement('div');
  caloriasDiv.innerHTML = `<h3>Calorías Diarias Recomendadas: ${recomendaciones.calorias.toFixed(0)} kcal</h3>`;
  recomendacionesDiv.appendChild(caloriasDiv);

  const dietaDiv = document.createElement('div');
  dietaDiv.innerHTML = `<h3>Dieta Recomendada:</h3><p>${recomendaciones.dieta}</p>`;
  recomendacionesDiv.appendChild(dietaDiv);

  const dietaImagenDiv = document.createElement('div');
  dietaImagenDiv.innerHTML = '<h3>Imágen de Dieta Recomendada:</h3>';
  const dietaImagen = document.createElement('img');
  dietaImagen.src = `imagendita/dieta2.jpeg`;
  dietaImagenDiv.appendChild(dietaImagen);
  recomendacionesDiv.appendChild(dietaImagenDiv);

  const ejerciciosDiv = document.createElement('div');
  ejerciciosDiv.innerHTML = '<h3>Ejercicios Recomendados:</h3>';
  recomendaciones.ejercicios.forEach((ejercicio) => {
    const ejercicioDiv = document.createElement('div');
    ejercicioDiv.classList.add('ejercicio');
    ejercicioDiv.innerHTML = `<img src="imagen/${ejercicio.imagen}" alt="${ejercicio.nombre}"><p>${ejercicio.nombre}</p>`;
    ejerciciosDiv.appendChild(ejercicioDiv);
  });
  recomendacionesDiv.appendChild(ejerciciosDiv);
}
