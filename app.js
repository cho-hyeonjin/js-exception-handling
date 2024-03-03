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

// todo: 예외 처리 구문 try...catch...finally 를 어디서 작성해줘야 할까?
// 전달받은 인수에 따라 다른 함수를 실행하는 함수 --- 이 함수는 예외 케이스에 따라 다른 함수를 call 해주는 outer function 역할을 하는 함수일 뿐!
function callException(type) {
  if (type === "do") {
    doException();
  } else {
    noException();
  }
}

// 애플리케이션 메인 로직 함수
// todo: 이 함수 내부에서 실행하는 것이 적합니다.
// ✅ try...catch...finally 문의 특징
// ✅ 밖으로 throw된 에러는 그 바깥쪽에 위치한 어느 함수든 catch로 잡기만 하면 된다는 것이기 떄문에
// main 함수에서 예외 케이스에 따라 다른 함수를 호출하는 함수를 호출하고,
// 만약 에러가 발생해서 doException 함수가 호출된다면,
// doException 함수가 밖으로 throw 한 에러를 main 함수에서 catch하는 것이 자연스럽다.
function main() {
  try {
    callException("do"); // 에러 케이스 전달
  } catch (error) {
    console.log(error); // 예외(에러) 처리
  } finally {
    console("done");
  }
}

main();
