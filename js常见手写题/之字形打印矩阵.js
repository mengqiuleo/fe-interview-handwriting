/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-19 21:46:11
 * @LastEditTime: 2023-01-20 01:06:13
 */
const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
//1 2 5 9 6 3 4 7 10 13 14 11 8 12 15 16


function print(arr, Ar, Ac, Br, Bc, flag){
  if(flag){

    while(Ac != Bc-1){
      console.log(arr[Ar++][Ac--]); //从右上到左下
    }
  } else {
    // console.log('点A：', Ar, Ac);
    // console.log('点B：', Br, Bc);
    while(Bc != Ac +1 ){ //当点B位于点A下面时
      console.log(arr[Br--][Bc++]); //从左下到右上
    }
  }
}
function printMatrix(arr){
  let endR = arr.length-1, endC = arr[0].length-1;
  let Ar = 0, Ac = 0; //(Ar,Ac)
  let Br = 0, Bc = 0; //(Br,Bc)
  let flag = false;
  while(Ar != endR+1){
    print(arr, Ar, Ac, Br, Bc, flag);
    Ar = ( Ac == endC ) ? Ar+1 : Ar;
    Ac = ( Ac == endC ) ? Ac : Ac+1;
    Br = ( Br == endR ) ? Br : Br+1;
    Bc = ( Br == endR ) ? Bc+1 : Bc;
    flag = !flag;
  } 
}

printMatrix(arr)