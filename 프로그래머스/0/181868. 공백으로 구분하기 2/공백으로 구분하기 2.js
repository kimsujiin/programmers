function solution(my_string) {
   const words = my_string.split(' ').filter((word)=> word !== '');
    return words
}