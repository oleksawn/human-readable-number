module.exports = function toReadable (number) {
  var arr = String(number).split("");
  var res = [];
  function read(num, pos){
      var strNum;
      if(pos == 1){
        switch(num){
            case 0: strNum = "zero"; break;
          case 1: strNum = "one"; break;
          case 2: strNum = "two"; break;
          case 3: strNum = "three"; break;
          case 4: strNum = "four"; break;
          case 5: strNum = "five"; break;
          case 6: strNum = "six"; break;
          case 7: strNum = "seven"; break;
          case 8: strNum = "eight"; break;
          case 9: strNum = "nine"; break;
        }
      }
      if(pos == 2){
        switch(num){
            case 0: strNum = ""; break;
          case 2: strNum = "twenty"; break;
          case 3: strNum = "thirty"; break;
          case 4: strNum = "forty"; break;
          case 5: strNum = "fifty"; break;
          case 6: strNum = "sixty"; break;
          case 7: strNum = "seventy"; break;
          case 8: strNum = "eighty"; break;
          case 9: strNum = "ninety"; break;
        }
      }
      if(pos == 11){
          switch(num){
              case 10: strNum = "ten"; break;
            case 11: strNum = "eleven"; break;
          case 12: strNum = "twelve"; break;
          case 13: strNum = "thirteen"; break;
          case 14: strNum = "fourteen"; break;
          case 15: strNum = "fifteen"; break;
          case 16: strNum = "sixteen"; break;
          case 17: strNum = "seventeen"; break;
          case 18: strNum = "eighteen"; break;
          case 19: strNum = "nineteen"; break;
          }
      }
  return strNum;  
  }
    
  for (var i = arr.length-1; i >= 0; i--){
    if(i == arr.length-1){
        res[2] = read(Number(arr[i]),1);
    }
      
    else if(i == arr.length-2){
        if(arr[i] == 1){
            res[1] = read(Number(arr[i]+arr[arr.length-1]),11) + " ";
            res[2] = "";
        }
        else if(arr[i] == 0){
            res[i] = ""
        }
        else {res[1] = read(Number(arr[i]),2) + " ";}
        
        if(arr[i] != 0 && arr[arr.length-1] == 0){
            res[2] = "";
        }
    }
      
    else if(i == arr.length-3){
        res[0] = read(Number(arr[i]),1) + " hundred "; 
        
        if(arr[i] != 0 && arr[arr.length-2] == 0 && arr[arr.length-1] == 0){
            res[2] = "";
        }
    }
  }

  return res.join("").trim();
}
