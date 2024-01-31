function solution(age) {
    var answer = '';
    
    const a = ['a','b','c','d','e','f','g','h','i','j']
    
    var age = age.toString()
    
    for(let i =0; i<age.length; i++){
        answer = answer + a[age[i]]
    }
    
    return answer;
}