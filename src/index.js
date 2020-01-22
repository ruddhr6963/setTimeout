import "./styles.css";

//function sayA(callback){
//  setTimeout( () => {
//    callback();         // 이 순서에 정의하면 오류 발생
//    console.log("A")
//  }, 1000);
//}

// 참조 : https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout
// setTimeout 문법 : setTimeout(func, delay, param1, param2 ...)

function sayA(callback){
  setTimeout(() => {
    console.log("A");
  }, 1000, callback);
}

sayA();