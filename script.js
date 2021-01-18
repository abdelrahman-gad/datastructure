// task 1 javascript.info -> translate border-left-width to translateBorderLeftWidth
//  
function camilize(str){
// 1- split string to array 
//     let wordsArr = str.split('-');
// // 2- loop throgh every word [elem] and check the first elem id alphabet
//     let modifiedWordsArr=wordsArr.map( word => {
//         // test that first word
//         return word[0].toUpperCase() + word.slice(1);       
//     })
//     console.log(modifiedWordsArr);

  return str.split('-').map(word=>word[0].toUpperCase()+word.slice(1)).join('');



}

const result =  camilize('border-left-window');


console.log(result);