function solution(strArr) {
  let countMap = {}
  
  for(let str of strArr){
      let len = str.length
      if(countMap[len]){
          countMap[len] +=1
      }else{
          countMap[len] = 1
      }  
  }
    let maxCount = 0;  

  for (let len in countMap) {
    if (countMap[len] > maxCount) {  
      maxCount = countMap[len]; 
    }
  }
return maxCount
}