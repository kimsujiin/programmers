function solution(money) {

    const Ame = 5500 
    //아메리카노 가격
    const AmeMax = Math.floor(money / Ame) 
    //최대 아메리카노 잔 수
    const restM = money  % Ame 
    //남는돈
    return [AmeMax,restM];
}