function solution(array) {
  // 입력 배열의 요소를 카운트하기 위한 객체 생성
  let count = {};

  // 배열의 각 요소를 순회하며 카운트
  for (let i = 0; i < array.length; i++) {
    if (count[array[i]] === undefined) {
      count[array[i]] = 1;
    } else {
      count[array[i]]++;
    }
  }

  // 카운트된 요소 중 최빈값들을 저장할 배열
  let modes = [];
  let maxCount = 0;
  for (let key in count) {
    if (count[key] > maxCount) {
      modes = [key]; // 현재 요소가 더 큰 출현 횟수를 가지므로 modes 배열을 초기화하고 현재 요소를 추가
      maxCount = count[key];
    } else if (count[key] === maxCount) {
      modes.push(key); // 최빈값이 여러 개인 경우 modes 배열에 현재 요소를 추가
    }
  }

  if (modes.length === 1) {
    return Number(modes[0]); // 최빈값이 하나인 경우 해당 값을 반환
  } else {
    return -1; // 최빈값이 여러 개인 경우 -1 반환
  }
}
