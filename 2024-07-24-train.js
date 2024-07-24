/* ## 1. 빈칸 채우기 문제
** 해결 방법
** undefined : 변수가 선언되었을 뿐 할당된 값을 찾지 못함
*/
let uninitialized;
console.log(uninitialized); // undefined : 변수가 선언되었을 뿐 할당된 값을 찾지 못함


/* ## 1. 빈칸 채우기 문제
** 해결 방법
** 변수의 값이 변경되지 않으려면 const(상수)로 선언해야함
*/
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable


/* ## 1. 빈칸 채우기 문제
** 해결 방법
** 19출력, 배열의 4번째 요소를 찾음 [4] = 0,1,2,3 번째 배열
*/
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 19


/* ## 1. 빈칸 채우기 문제
** 해결 방법
** undefined = false || false = false 출력
** !! = false 출력
*/
let mySchedule = "";
console.log(mySchedule || false); // false
console.log(!!mySchedule); // false 

// ## 2. 객체 선언해보기
const my = {
  name: 'kimminkyu',
  age: 31,
  mbti: 'enfj',
};

console.log('my name is =>', my.name);
console.log('my age is =>', my.age);
console.log('my mbti is =>', my.mbti);

// ## 3. 홀짝 판별기
// 삼항연산자를 사용하여 매개변수로 전달받은 인자값을 % 2 를해서 0이면 짝수, 아니면 홀수를 반환하게 했습니다.
const getNumbers = num => num % 2 === 0 ? "짝수" : "홀수";
console.log(getNumbers(10)); // 결과값 "짝수";
console.log(getNumbers(7)); // 결과값 "홀수";


// ## 4. 계산기 문제
// 연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다.
// 함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.

function handleOperator(val1, operator, val2) {
  if (operator === '+') return val1 + val2;
  else if (operator === '-') return val1 - val2;
  else if (operator === '*') return val1 * val2;
  else if (operator === '/') return val1 / val2;
  else "연산자가 아닌것 같습니닷. 확인 부탁드려요!"
  // 코드를 작성해주세요.
}

handleOperator(3, "+", 6); // 결과값 9
handleOperator(11, "-", 6); // 결과값 5
handleOperator(6, "*", 3); // 결과값 18
handleOperator(15, "/", 3); // 결과값 5

// ## 5. 평균 점수 구하기 [선택 문제]
// 5번 문제는 필수 문제가 아닌, 4번까지 풀고 여유가 있을 때 풀어보는 선택 문제입니다.
const solution = n => n.reduce((a, b) => a + b / n.length, 0);
console.log(solution([36, 62, 72, 55, 86, 95, 92, 48, 81]));

// 학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다. 
// scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];
function handleScoresAdd(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  return scores.map((item) => item + 3)
}

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]