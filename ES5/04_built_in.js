// 빌트인 오브젝트


/*
    - 빌트인 Number 오브젝트
    - 123과 같은 숫자, 상수, 지수를
    - 처리하는 오브젝트
    - 여기서 오브젝트는 소문자 object (데이터를 처리하는데에 중점, 함수가 있음)
*/

var obj = Number; // obj = f Number()

// Number


console.log(Number(0x14)); // 20
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// Number에 파라미터 값 미작성 시 0을 반환


// new 연산자
// 오브제긑로 인스턴스를 생성하여 반환