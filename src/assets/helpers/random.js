export const getRandomDimension = () => {
  //? Esta funcion debe retornar un número del 1 al 126 que representa una dimensión
  return Math.floor( Math.random() * 126) + 1
}