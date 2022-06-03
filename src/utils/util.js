
export function getpercentual(valor, valortotal){
  console.log(valor);
  // console.log(valortotal);
  // console.log(parseInt(valor));
  return valor == 0 && valortotal == 0 ? 0 : Math.round((parseInt(valor)*100)/parseInt(valortotal))
}