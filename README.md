# hello-react

리액트를 다루는 기술(김민준) 실습 코드

## 개정판 (renew)

차이점 : 함수형 컴포넌트의 Hooks, immer 불변성, react-virtualized 성능 최적화, context API, react-redux에서 connect 대신 useSelector/useDispatch Hooks 사용, redux-pender 대신 redux-saga, 코드 스플리팅 등

### 8. Hooks

- useState : 함수형 컴포넌트에서 상태를 관리할 수 있다. `const [value, setValue] = useState(0 /* 초기값 */);` 으로 사용

- useEffect : 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다. componentDidMount와 ComponentDidUpdate를 합친 형태로 보아도 무방하다.

  ```js
  /* 기본 */
  useEffect(() => {
  console.log("렌더링 완료");
  console.log({
      name,
      nickname
  });
  });

  /* 마운트될 때만 실행 */
  useEffect(() => {
  console.log("마운트될 때만 실행");
  }, []);

  /* 특정 값이 업데이트될 때만 실행 */
  useEffect(() => {
  console.log(name);
  }, [name]);
  // 아래와 동일
  componentDidUpdate(prevProps, prevState) {
  if (prevProps.value !== this.props.value) {
      doSomething();
  }
  }

  /* cleanup 함수 - 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 특정 작업 수행도록 설정시 */
  useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
      console.log("clean up");
      console.log(name);
  };
  });
  ```

- useReducer : useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 업데이트할 때 사용하는 Hook이다.

- useMemo : 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다. 숫자, 문자열, 객체처럼 일반 값을 재사용할 때 사용하며 함수 재사용시 더 간편한 useCallback이 존재한다. `const avg = useMemo(()=>getAverage(list), [list]);`로 사용하며, 배열 내의 값이 변경되었을 때만 연산을 실행하고, 그렇지 않으면 기존의 값을 재사용한다.

- useCallback : useMemo와 비슷한 함수로 주로 렌더링 성능을 최적화해야 하는 상황에서 사용한다. 이 Hook을 사용하여 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다. useMemo와 마찬가지로 `const onChange = useCallback(e=>{setNumber(e.target.value);}, []);`로 사용하며, 빈 배열일 경우 컴포넌트 처음 렌더링시, 아닐 경우 배열 내의 값이 변경되었을 때만 함수를 생성한다.

- useRef : 함수형 컴포넌트에서 ref를 쉽게 이용할 수 있도록 해준다. `const inputEl = useRef(null);`로 정의하며 객체 안의 current 값이 실제 엘리먼트를 가리킨다. `inputEl.current.focus();` 또한, 렌더링과 상관없이 변경되는 로컬 변수를 정의할 때도 사용된다. `const id = useRef(1);`

### 10. 일정 관리 웹 어ㅐ플리케이션 만들기

flex 연습 사이트 [FlexBox Froggy](https://flexboxfroggy.com/#ko)

### 11. 컴포넌트 성능 최적화

#### 11.4 React.memo를 사용하여 컴포넌트 성능 최적화

컴포넌트의 리렌더링을 방지하는 메서드로 클래스형 컴포넌트의 라이프사이클 메서드 shouldComponentUpdate가 있다면 함수형 컴포넌트에는 React.memo가 있다. `export default React.memo(App);`로 컴포넌트를 감싸서 내보낸다. 함수형 컴포넌트의 파라미터가 변경될 경우에만 리렌더링 한다.

#### 11.5 onToggle, onRemove 함수가 바뀌지 않게 하기

todos 배열을 참조하고 있는 함수들은 todos 배열이 불변성을 유지하며 변경되면 새로운 함수가 만들어진다. 이를 방지하기 위해 useState나 useReducer를 사용할 수 있다.

useState의 함수형 업데이트 : setTodos를 사용할 때 새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를 넣을 수도 있는데 이를 함수형 업데이트라고 부른다. `setNumber(number+1)` 하는 것이 아니라 `const onIncrease = useCallback(()=>setNumber(prev=>prev+1), []);` 처럼 어떻게 업데이트할지 정의해 주는 업데이트 함수다. 배열에 number을 넣지 않아도 된다.

useReducer 사용하기 : 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에 둘 수 있으며 성능상 비슷하기 때문에 어떤 방법을 선택할지는 취향에 따라 결정하면 된다.

---

## 리액트를 다루는 기술 (실무에서 알아야 할 기술은 따로 있다!) \_ 김민준

### 목차

[1장 리액트 시작](docs/01.md)

[2장 JSX](docs/02.md)

[3장 컴포넌트](docs/03.md)

[4장 이벤트 핸들링](docs/04.md)

[5장 ref: DOM에 이름 달기](docs/05.md)

[6장 컴포넌트 반복](docs/06.md)

[7장 컴포넌트의 라이프사이클 메서드](docs/07.md)

[8장 함수형 컴포넌트](docs/08.md)

[9장 컴포넌트 스타일링](docs/09.md)

[10장 일정 관리 웹 애플리케이션 생성](docs/10.md)

[11장 컴포넌트 리렌더링 최적화](docs/11.md)

[12장 리덕스 개념 이해](docs/12.md)

[13장 리덕스로 리액트 애플리케이션 상태 관리](docs/13.md)

[14장 리덕스, 더 편하게 사용](docs/14.md)

[15장 리덕스 미들웨어와 외부 데이터 연동](docs/15.md)

[16장 react-router로 SPA 개발](docs/16.md)

[17장 코드 스플리팅](docs/17.md)

[18장 백엔드 프로그래밍: Node.js의 Koa 프레임워크](docs/18.md)

[19장 mongoose를 이용한 MongoDB 연동 실습](docs/19.md)

[20장 블로그 프로젝트](docs/20.md)
