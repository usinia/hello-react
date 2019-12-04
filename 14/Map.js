const { Map, fromJS } = Immutable;

// Immutable의 Map으로 선언
const data = Map({
  a: 1,
  b: 2,
  c: Map({
    d: 3,
    e: 4,
    f: 5
  })
});

console.log(data);

// 자바스크립트 객체를 Map으로 변환
const data2 = fromJS({
  a: 1,
  b: 2,
  c: { d: 3, e: 4, f: 5 }
});

console.log(data2);

// 자바스크립트 객체로 변환
const deserialized = data.toJS();
console.log(deserialized); // {"a":1,"b":2,"c":{"d":3,"e":4,"f":5}}

// 특정 키의 값 불러오기
console.log(data.get("a")); // 1

// 깊숙이 위치하는 값 불러오기
console.log(data.getIn(["c", "d"])); // 3

// 값 설정 -> data의 값이 변하는 것이 아니라, 변경한 값을 가지는 새로운 객체를 반환한다.
const newData = data.set("a", 4);
console.log(data === newData);
//    data : {"a":1,"b":2,"c":{"d":3,"e":4,"f":5}}
// newData : {"a":4,"b":2,"c":{"d":3,"e":4,"f":5}}

// 깊숙이 위치하는 값 수정 (내부 객체들도 Map 형태여야 사용 가능)
const newData2 = data.setIn(["c", "d"], 10);
//     data : {"a":1,"b":2,"c":{"d":3,"e":4,"f":5}}
// newData2 : {"a":1,"b":2,"c":{"d":10,"e":4,"f":5}}

// 여러 값 동시에 설정
const newData3 = data.mergeIn(["c"], { d: 10, e: 10 });
//     data : {"a":1,"b":2,"c":{"d":3,"e":4,"f":5}}
// newData3 : {"a":1,"b":2,"c":{"d":10,"e":10,"f":5}}
// => c 내부의 f 값은 그대로 유지하면서 d와 e만 변경된다.
const newData4 = data.setIn(["c", "d"], 10).setIn(["c", "e"], 10); // merge와 같은 의미
//     data : {"a":1,"b":2,"c":{"d":3,"e":4,"f":5}}
// newData4 : {"a":1,"b":2,"c":{"d":10,"e":10,"f":5}}

const newData5 = data.merge({ a: 10, b: 10 }); // 최상위 merge
//     data : {"a":1,"b":2,"c":{"d":3,"e":4,"f":5}}
// newData5 : {"a":10,"b":10,"c":{"d":3,"e":4,"f":5}}

/* set과 merge
set이 merge보다 성능상 빠르지만, 미세한 차이기 때문에 상관없다.
*/
