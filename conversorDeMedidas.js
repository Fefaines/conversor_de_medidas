const ValorMetro = prompt(
  "Insira em metros o valor que deseja converter" + "\nEx: 100"
);
const UnidadeDeMedida = prompt(
  "Para qual unidade de medida deseja converter?\n" +
    "\n1. milímetros (mm)" +
    "\n2. centímetros (cm)" +
    "\n3. decímetros (dm)" +
    "\n4. decâmetros (dam)" +
    "\n5. hectômetros (hm)" +
    "\n6. quilômetros (km)"
);

switch (UnidadeDeMedida) {
  case "1":
    alert("Resultado: " + ValorMetro + "m = " + ValorMetro * 1000 + "mm");
  case "2":
    alert("Resultado: " + ValorMetro + "m = " + ValorMetro * 100 + "cm");
  case "3":
    alert("Resultado: " + ValorMetro + "m = " + ValorMetro * 10 + "dm");
  case "4":
    alert("Resultado: " + ValorMetro + "m = " + ValorMetro / 10 + "dam");
  case "5":
    alert("Resultado: " + ValorMetro + "m = " + ValorMetro / 100 + "hm");
  case "6":
    +alert("Resultado: " + ValorMetro + "m = " + ValorMetro / 1000 + "km");
}
