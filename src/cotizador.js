import { pesoPorMetro } from "./catalogo.js";

/** Precio de venta de ejemplo, en MXN por kilogramo. */
export const PRECIO_POR_KG = 32.5;

/** Tasa de IVA. */
export const IVA = 0.16;

/**
 * Calcula el peso (kg) de una partida.
 *
 * Una pieza tiene la forma:
 *   { perfil: "IPR 203x19.4", longitudMm: 6000, cantidad: 4 }
 * donde longitudMm es la longitud de cada pieza en milímetros.
 */
export function pesoPieza(pieza) {
  const longitudEnMetros = pieza.longitudMm / 1000;
  return pesoPorMetro(pieza.perfil) * longitudEnMetros * pieza.cantidad;
}

/**
 * Genera la cotización de una lista de piezas.
 * Devuelve { pesoTotal, subtotal, iva, total }.
 */
export function cotizar(piezas, precioPorKg = PRECIO_POR_KG) {
  const pesoTotal = piezas.reduce((acumulado, pieza) => acumulado + pesoPieza(pieza), 0);
  const subtotal = pesoTotal * precioPorKg;
  const iva = subtotal * IVA;

  return {
    pesoTotal,
    subtotal,
    iva,
    total: subtotal + iva,
  };
}
