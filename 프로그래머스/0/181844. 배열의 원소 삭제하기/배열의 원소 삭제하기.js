function solution(arr, delete_list) {
    const result = arr.filter((num)=> !delete_list.includes(num))
    return result
}