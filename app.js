// '예외 처리'란?
// '예외'란 쉽게 말해 '오류(에러)'를 나타낸다.
// 따라서, '예외 처리'란 '오류를 처리하는 방식'을 뜻한다.
// 예외 처리에는 두 가지 방식을 사용할 수 있다.
// 1) return 값으로 'OOO 오류가 발생했다.'라고 직접 알려주는 방식
// ✅ 2) '예외 처리 구문(Exception handling statements)'을 이용하는 방식 --- 이 방식에 대해 정리할 것이다.
//       예외 발생 여부가 고정된 것이 아닌 경우 2번 방식이 적합하다.

// 예외 발생(생성) 함수
function doException() {
  throw new Error("에러 발생");
}
// 에러가 발생하지 않는 함수
function noException() {
  return true;
}

// 전달받은 인수에 따라 다른 함수를 실행하는 함수
function callException(type) {
  if (type === "do") {
    doException();
  } else {
    noException();
  }
}

function main() {
  try {
    // todo: 경우에 따라 doException, noException 실행하는 코드로 변경하기
    // doException(); // 에러(예외) 발생 케이스
    noException(); // 에러(예외) 발생하지 않는 케이스
  } catch (error) {
    console.log(error);
  } finally {
    console.log("예외 처리 후 실행해야 하는 코드");
  }
}

main();
