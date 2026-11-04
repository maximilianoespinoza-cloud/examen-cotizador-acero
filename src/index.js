import { cotizar } from "./cotizador.js";
import { formatearKg } from "./utils.js";
import { formatearMXN } from './utils.js';

// Paquete de ejemplo: una estructura pequeña.
const piezas = [
  { perfil: "IPR 254x22.3", longitudMm: 6000, cantidad: 4 }, // columnas
  { perfil: "IPR 203x19.4", longitudMm: 8000, cantidad: 2 }, // trabes
  { perfil: "PTR 4x4 cal. 11", longitudMm: 6100, cantidad: 10 }, // largueros
  { perfil: "Ángulo 2x1/4", longitudMm: 3000, cantidad: 8 }, // contravientos
];

const cotizacion = cotizar(piezas);

console.log("=== Cotización de acero ===");
console.log(`Peso total: ${formatearKg(cotizacion.pesoTotal)}`);
console.log(`Subtotal:   ${formatearMXN(cotizacion.subtotal)}`);
console.log(`IVA (16%):  ${formatearMXN(cotizacion.iva)}`);
console.log(`Total:      ${formatearMXN(cotizacion.total)}`);
