function solution(array) {

    array.sort(function(a,b){
        return a-b
    });
    
    const mid = Math.floor(array.length / 2)
    return array[mid]
    
}