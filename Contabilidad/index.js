function calcularImpuesto() {
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let resultado = document.getElementById("resultado");
    
    if (isNaN(sueldo) || sueldo < 0) {
        resultado.innerHTML = "Por favor, ingrese un número válido.";
        return;
    }
    
    let tramo1 = 34685.00;
    let tramo2 = 52027.42;
    let tramo3 = 72260.25;
    let tasa1 = 0.15;
    let tasa2 = 0.20;
    let tasa3 = 0.25;
    let impuesto = 0;
    
    if (sueldo > tramo1) {
        if (sueldo <= tramo2) {
            impuesto = (sueldo - tramo1) * tasa1;
        } else if (sueldo <= tramo3) {
            impuesto = (tramo2 - tramo1) * tasa1 + (sueldo - tramo2) * tasa2;
        } else {
            impuesto = (tramo2 - tramo1) * tasa1 + (tramo3 - tramo2) * tasa2 + (sueldo - tramo3) * tasa3;
        }
    }
    
    resultado.innerHTML = `El impuesto mensual es: $${impuesto.toFixed(2)}</strong>`;
}
