const { List, Map, fromJS } = Immutable;

// Immutable의 List로 선언
const list = List([0, 1, 2, 3, 4]);

// 객체들의 List. 내부 객체를 Map으로 만들어야 추후 ger과 set을 사용할 수 있다.
const list2 = List([Map({ value: 1 }), Map({ value: 2 })]);
// or
const list3 = fromJS([{ value: 1 }, { value: 2 }]);

// 자바스크립트 객체로 변환
console.log(list2.toJS(), list3.toJS());
// [{"value":1},{"value":2}]

// 값 읽어 오기
console.log(list2.get(0)); // Lt>_root>entries>Array(2)
console.log(list2.getIn([0, "value"])); // 0번째 아이템의 value값

// 아이템 수정
// set : 원소를 통째로 바꾸고 싶을 때
const newList = list2.set(0, Map({ value: 10 }));
// list2 : [{"value":1},{"value":2}]
// newList : [{"value":10},{"value":2}]

// setIn : 내부의 값을 변경하고 싶을 때
const newList2 = list2.setIn([0, "value"], 10);
// list2 : [{"value":1},{"value":2}]
// newList : [{"value":10},{"value":2}]

// update : 기존 값을 참조하여 수정할 때 편리. update(수정할 인덱스 값, 변경할 값)
const newList3 = list2.update(0, item =>
  item.set("value", item.get("value") * 5)
);
// list2 : [{"value":1},{"value":2}]
// newList : [{"value":5},{"value":2}]
const newList4 = list2.setIn([0, "value"], list2.getIn([0, "value"]) * 5); // update와 같은 의미

// 아이템 추가. 기존 List가 변경되는 것이 아니라 새로운 List가 반환된다.
// push : 데이터 마지막에 추가
const newList5 = list2.push(Map({ value: 3 }));
// [{"value":1},{"value":2},{"value":3}]

// unshift : 데이터 처음에 추가
const newList6 = list2.unshift(Map({ value: 3 }));
// [{"value":3},{"value":1},{"value":2}]

// 아이템 제거
const newList7 = list2.delete(1); // index가 1인 아이템 제거
// list2 : [{"value":1},{"value":2}]
// newList7 : [{"value":1}]

const newList8 = list2.pop(); // 마지막 데이터 제거
// list2 : [{"value":1},{"value":2}]
// newList7 : [{"value":1}]

// List 크기 가져오기
console.log("size", list2.size);

// 빈 List인지 확인
console.log(list2.isEmpty());
