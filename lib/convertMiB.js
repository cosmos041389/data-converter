var resultArrMiB=[];
var MiBUnit=['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
var MiBUnitValue=[Math.pow(2, 10),Math.pow(2, 20),Math.pow(2, 30),Math.pow(2, 40),Math.pow(2, 50),Math.pow(2, 60),Math.pow(2, 70),Math.pow(2, 80)];

/**
 * 입력값을 단위에 맞게 변환하는 함수 - MiB 
 * @param {number} value 
 * @param {number} mode 
 * @param {number} index 
 * @returns 변환된 데이터를 반환
 */
function convertMiB(value, mode, index){

  var convertedUnit = mode / MiBUnitValue[index];

  return (value * convertedUnit);
}

/**
 * 변환된 데이터를 테이블에 출력하는 함수
 */
function printResultMiB(){

  var tableMib = document.getElementById('mibtable');
  var rowMib = tableMib.getElementsByClassName('mibresult');

  var i = 0;

  getParsedInput();

  while(i < MiBUnit.length){

    resultArrMiB[i] = convertMiB(arrParsedValue[0], arrParsedValue[1], i);

    rowMib[i].innerHTML=resultArrMiB[i];

    i += 1;
  }
}