// Input: tauhida parveen
// Output: tauhida%20parveen

// input: www.thinkful.com /tauh ida parv een

// output: www.thinkful.com%20/tauh%20ida%20parv%20een

let str = 'www.thinkful.com /tauh ida parv een';

function urlify(str){
  let newStr ='';
  for (let i = 0; i < str.length; i++) {
    if(str[i]===' '){
      newStr+='%20';
    } else {
      newStr+=str[i];
    }
  }
  return newStr;
}

console.log(urlify(str));