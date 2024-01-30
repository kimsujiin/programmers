function solution(my_string, letter) {
    const new_string = my_string.split(letter).join('')
    return new_string
}