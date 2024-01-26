function solution(num_list) {
if(num_list.length === 0){
    return [];
}
    
const lastElement = num_list[num_list.length -1];
const secondLastElement = num_list[num_list.length -2];
    
if(lastElement>secondLastElement){
  const  newElement =  lastElement - secondLastElement;
    num_list.push(newElement)
} else{
    const newElement = lastElement * 2;
    num_list.push(newElement)
}
    return num_list
}