// '예외 처리'란?
// '예외'란 쉽게 말해 '오류(에러)'를 나타낸다.
// 따라서, '예외 처리'란 '오류를 처리하는 방식'을 뜻한다.
// 예외 처리에는 두 가지 방식을 사용할 수 있다.
// 1) return 값으로 'OOO 오류가 발생했다.'라고 직접 알려주는 방식
// ✅ 2) '예외 처리 구문(Exception handling statements)'을 이용하는 방식 --- 이 방식에 대해 정리할 것이다.
//       예외 발생 여부가 고정된 것이 아닌 경우 2번 방식이 적합하다.

// 예외 발생(생성) 함수 → doException 이 실행되면, 에러 객체가 생성되어 밖으로 던져진다.
// 예외를 발생시키는 구문은 throw 문이다.
// 일반적으로 'throw new 객체();' 하여 에러 인스턴스를 생성하는 방식으로 사용된다.
function doException() {
  throw new Error("에러 발생");
}

function main() {
  // 예외 처리 구문 try...catch...fanally
  // 예외(에러)가 발생(throw)된 경우 : catch 구문으로 예외가 걸려들어옴
  // 예외(에러)가 발생하지 않은 경우 : finally 구문으로
  // 말하자면 try는 if 조건문,
  // catch는 특정 조건에 대한 실행문(body)
  // fanally는 모든 상황의 마지막에 한 번 실행되는 구문 (에러 발생 안한 경우 finally로 직행, 에러 발생한 경우 예외처리문 실행 후에 finally문 실행)
  try {
    doException();
  } catch (error) {
    console.log(error); // 에러가 발생한 경우 위의 '예외 처리 후 실행해야 하는 코드'는 실행되지 않고
    //                     바로 catch문으로 넘어가버리고, catch로 throw된 예외를 잡아서 처리한 뒤에 finally가 없다면 '예외 처리 후 실행해야 하는 코드'는 실행되지 않고 끝나버린다.
    //                     이러한 상황에 finally가 필요하다.
  } finally {
    console.log("예외 처리 후 실행해야 하는 코드"); // finally에 작성해주면 catch문의 실행여부와 관련 없이 에러가 발생된 경우이건, 발생하지 않은 경우이건 종료 전에 finally문이 실행되게 된다.
  }
}

main();
