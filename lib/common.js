var valueInput;
var optionSelect;
var arrParsedValue = [];

function getParsedInput(){

  valueInput = document.getElementById('input').value;
  optionSelect = document.getElementById("mode");

  arrParsedValue[0] = Number(valueInput);
  arrParsedValue[1] = Number(optionSelect.options[optionSelect.selectedIndex].value);

}
