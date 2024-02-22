function solution(num_list) {
  if (num_list.length >= 11) {
    // 리스트의 길이가 11 이상일 경우, 모든 원소의 합을 구합니다.
    var sum = num_list.reduce(function(acc, cur) {
      return acc + cur;
    }, 0);

    return sum;
  } else {
    // 리스트의 길이가 10 이하일 경우, 모든 원소의 곱을 구합니다.
    var product = num_list.reduce(function(acc, cur) {
      return acc * cur;
    }, 1);

    return product;
  }
}