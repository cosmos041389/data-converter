/*variable*/
var resultArrMB=[];
var MBUnit=['bit','B','KB','MB','GB','TB','PB','EB','ZB','YB'];
var MBUnitValue=[0.125,1,1000,1000000,1000000000,1000000000000,1000000000000000,1000000000000000000,1000000000000000000000,1000000000000000000000000];

/*execution*/

/*function*/
function convertMB(value, mode, index){
  /*variable*/
  var convertedUnit = mode / MBUnitValue[index];

  /*execution*/
  return (value * convertedUnit);
}

function printResultMB(){
  /*variable*/
  var inputValue = document.getElementById('input').value;
  var parsedValue = Number(inputValue);

  var selectOption = document.getElementById("mode");
  var parsedSelectOption = Number(selectOption.options[selectOption.selectedIndex].value);

  var table = document.getElementById('mbtable');
  var row = table.getElementsByClassName('mbresult');
  var i=0;
  var flag=0;

  /*execution*/
  //console.log(inputValue);
  //console.log(selectOption);
  //console.log(table);
  //console.log(row[1]);

  while(i < MBUnit.length){

    resultArrMB[i] = convertMB(parsedValue, parsedSelectOption, i);
    //console.log(resultArrMB[i]);

    row[i].innerHTML=resultArrMB[i];
    i += 1;
  }
  i=0;
}
