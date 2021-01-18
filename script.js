//  task 2 git flitered array of numbers based on rang



let arr = [1,3, 4 , 5 ,6,7];

let filterArray=function(arr , range1 , range2 ){
    let filteredArr = arr.filter( function(item){
    // case1 -> range1  < range2 
       let matchingItem;
        if(range1<range2){
            matchingItem = item >=range1 && item <=range2;
        }else{
            matchingItem = item <=range1 && item >=range2;
        }   
        return matchingItem;
    });
    return filteredArr;
}

let result = filterArray(arr , 6,3 );
console.log(result);











