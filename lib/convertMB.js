var resultArrMB=[];
var MBUnit=['bit','B','KB','MB','GB','TB','PB','EB','ZB','YB'];
var MBUnitValue=[0.125,1,1000,1000000,1000000000,1000000000000,1000000000000000,1000000000000000000,1000000000000000000000,1000000000000000000000000];

/**
 * 입력값을 단위에 맞게 변환하는 함수 - MB
 * @param {number} value 
 * @param {number} mode 
 * @param {number} index 
 * @returns 변환된 데이터를 반환
 */
function convertMB(value, mode, index){
  var convertedUnit = mode / MBUnitValue[index];

  return (value * convertedUnit);
}

/**
 * 변환된 데이터를 테이블에 출력하는 함수
 */
function printResultMB(){

  var tableMb = document.getElementById('mbtable');
  var rowMb = tableMb.getElementsByClassName('mbresult');

  var i=0;

  getParsedInput();

  while(i < MBUnit.length){

    resultArrMB[i] = convertMB(arrParsedValue[0], arrParsedValue[1], i);

    rowMb[i].innerHTML=resultArrMB[i];

    i += 1;
  }
}