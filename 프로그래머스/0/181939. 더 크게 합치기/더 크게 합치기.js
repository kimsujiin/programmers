function solution(a, b) {

    const answer1 = Number( String(a) + String(b));
    const answer2= Number(String(b)+String(a));
    if(answer1 > answer2){
        return answer1;
    } else {
        return answer2;
    };
};