function solution(my_string, s, e) {
let start = my_string.substring(0,s)
let middle = my_string.substring(s,e+1)
let end = my_string.substring(e+1)

middle= middle.split('').reverse().join('')

return start+middle+end
}