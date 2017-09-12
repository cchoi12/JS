var copper = "copper";
var zinc = "zinc";
var carbon = "carbon";
var iron = "iron"

function smelter(x, y) {
  if (x == carbon && y == iron) {
    return "steel";
  }
  else if (x == iron && y == carbon) {
    return "steel";
  }
  else if (x == copper && y == zinc){
    return "bronze";
  }
  else if (x == zinc && y == copper) {
    return "bronze";
  }
}
