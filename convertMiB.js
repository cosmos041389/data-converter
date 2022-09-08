/*variable*/
var resultArrMiB=[];
var MiBUnit=['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
var MiBUnitValue=[Math.pow(2, 10),Math.pow(2, 20),Math.pow(2, 30),Math.pow(2, 40),Math.pow(2, 50),Math.pow(2, 60),Math.pow(2, 70),Math.pow(2, 80)];


/*execution*/

/*function*/
function convertMiB(value, mode, index){
  /*variable*/
  var convertedUnit = mode / MiBUnitValue[index];

  /*execution*/
  return (value * convertedUnit);

}

function printResultMiB(){
  /*variable*/
  var inputValue = document.getElementById('input').value;
  var parsedValue = Number(inputValue);

  var selectOption = document.getElementById("mode");
  var parsedSelectOption = Number(selectOption.options[selectOption.selectedIndex].value);

  var table = document.getElementById('mibtable');
  var row = table.getElementsByClassName('mibresult');
  var i=0;
  var flag=0;

  /*execution*/
  //console.log(inputValue);
  //console.log(selectOption);
  //console.log(table);
  //console.log(row[1]);

  while(i < MiBUnit.length){

    resultArrMiB[i] = convertMiB(parsedValue, parsedSelectOption, i);
    //console.log(resultArrMB[i]);

    row[i].innerHTML=resultArrMiB[i];
    i += 1;
  }
  i=0;

}
