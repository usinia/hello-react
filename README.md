# hello-react

리액트를 다루는 기술(김민준) 실습 코드

## 개정판 (renew)

차이점 : 함수형 컴포넌트의 Hooks, immer 불변성, react-virtualized 성능 최적화, context API, react-redux에서 connect 대신 useSelector/useDispatch Hooks 사용, redux-pender 대신 redux-saga, 코드 스플리팅 등

### 목차

1. 리액트 시작
2. JSX
3. 컴포넌트
4. 이벤트 핸들링
5. ref: DOM에 이름 달기
6. 컴포넌트 반복
7. 컴포넌트의 라이프사이클 메서드
8. Hooks
9. 컴포넌트 스타일링
10. 일정 관리 웹 애플리케이션 만들기
11. 컴포넌트 성능 최적화
12. immer를 사용하여 더 쉽게 불변성 유지하기
13. 리액트 라우터로 SPA 개발하기
14. 외부 API를 연동하여 뉴스 뷰어 만들기
15. Context API
16. 리덕스 라이브러리 이해하기
17. 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
18. 리덕스 미들웨어를 통한 비동기 작업 관리
19. 코드 스플리팅
20. 서버 사이드 렌더링
21. 백엔드 프로그래밍: Node.js의 Koa 프레임워크
22. mongoose를 이용한 MongoDB 연동 실습
23. JWT를 통한 회원 인증 시스템 구현하기
24. 프런트엔드 프로젝트: 시작 및 회원 인증 구현
25. 프런트엔드 프로젝트: 글쓰기 기능 구현하기
26. 프런트엔드 프로젝트: 포스트 조회 기능 구현하기
27. 프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리
28. 그 다음은?

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

### 12. immer를 사용하여 더 쉽게 불변성 유지하기

배열이나 객체의 깊이가 깊어질수록 불변성을 유지하기 힘들다. 이를 간편하게 하기 위해 immer 라이브러리를 설치하여 사용한다.

```js
import produce from "immer";
const nextState = produce(originalState, draft => {
  // originalState - 수정하고 싶은 상태(배열/객체)
  // draft - 상태를 어떻게 업데이트할지 정의하는 함수, 함수 내부에서 값을 변경하면 produce 함수가 불변성 유지를 대신해 주면서 새로운 상태를 생성

  // 바꾸고 싶은 값 변경
  draft.somewhere.deep.inside = 5;

  // 불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 하는 것이 핵심
});
```

컴포넌트와 useState의 함수형 업데이트 에서도 활용할 수 있다.

```js
// App.js
const onChange = useCallback(e => {
  const { name, value } = e.target;
  setForm(
    produce(form, draft => {
      draft[name] = value;
    });
  );
}, [form]);
```

```js
const update = draft => {
  draft.value = 2;
}; // immer의 produce 함수 호출시 첫 번째 파라미터가 함수 형태이면 업데이트 함수를 반환한다.
const originalState = {
  value: 1,
  foo: "bar"
};
const nextState = update(originalState);
console.log(nextState); // { value: 2, foo: 'bar' }
```

```js
// useState
const onChange = useCallback(e => {
  const { name, value } = e.target;
  setForm(
    produce(draft => {
      draft[name] = value;
    })
  );
}, []);
```

### 14. 외부 API를 연동하여 뉴스 뷰어 만들기

[newsapi API 키 발급](https://newsapi.org/register)

[South Korea news API](https://newsapi.org/s/south-korea-news-api)

### 15. Context API

Context API는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능이다. 컴포넌트 깊이가 깊거나 다루는 데이터 크기가 클 경우 사용한다.

기본적으로 `createContext, Consumer, Provider`을 사용하여 접근 및 값을 변경할 수 있다.

함수형 컴포넌트에서는 `useContext` Hook, 클래스형에서는 `static contextType`을 사용하여 context에 접근할 수 있다.

### 17. 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들 때 connect 함수 대신 react-redux의 Hooks인 `useSelector`와 `useDispatch`를 사용할 수 있다. 차이점은 connect는 데이터 변경시만 리렌더링 되지만 Hooks는 그렇지 않으므로 `React.memo()`로 감싸줘야 한다는 점이다.

### 19. 코드 스플리팅

사용자에게 제공하기 위해 리액트 프로젝트를 빌드할 때 불필요한 주석이나 트랜스파일 작업 등을 웹팩이 담당한다. 이 과정에서 자바스크립트 파일과 CSS 파일이 각 하나의 파일로 합쳐지는데, 웹팩 설정의 SplitChunks라는 기능이 적용되어 일정 크기 이상의 파일, 여러 파일 간에 공유된 파일 등을 자동으로 분리시켜 캐싱의 효과를 누릴 수 있다. 자주 바뀌지 않는 파일들의 캐싱 효과를 누릴 수 있는데, 이처럼 파일을 분리하는 작업을 코드 스플리팅이라고 한다.

`import`가 아닌 `import()`를 사용하면 실제 함수가 필요한 시점에서 파일을 불러온다.

state에 저장하여 사용하거나 `const a = await import('./b'); this.setState({s: a});`, React.lazy와 Suspense를 사용하여 코드 스플리팅할 수 있다. `const a = React.lazy(()=>import('./b'));` `<Suspense fallback={<div>loading</div>}><a /></Suspense>`

서버 사이드 렌더링을 제공하는 Loadable Components 라이브러리도 있다. 이 라이브러리를 사용하면 컴포넌트를 미리 불러올 수 있다. `const onMouseOver=()=>{a.preload();}`;

### 20. 서버 사이드 렌더링

UI를 서버에서 렌더링하는 것을 의미한다. 초기 렌더링을 서버가 대신 해주어 사용자가 html을 전달받을 때 내부에 렌더링된 결과물이 보인다. 초기 접속시 데이터가 로딩되지 않은 상황에서도 사용자가 볼 수 있는 html이 존재하기 때문에 사용자 경험이 올라간다. string 형태의 html을 return 하는 형식이다.

서버는 문자열 형태로 렌더링하므로 state나 리덕스 스토어의 상태 변경에 따라 자동으로 리렌더링 되지 않아서 renderToString 메서드를 호출해야 한다. 또한 라이프사이클 메서드도 사용할 수 없다.

서버 사이드 렌더링 시 데이터 로딩을 해결하는 방븝어로 redux-thunk 혹은 redux-saga 미들웨어를 사용하여 API를 호출하는 방식이 있다.

### 22. mongoose를 이용한 MongoDB 연동 실습

MongoDB를 GUI로 편하게 조회할 수 있는 [MongoDB Compass](https://www.mongodb.com/products/compass)

### 23. JWT를 통한 회원 인증 시스템 구현하기

대표적인 인증 방식으로 세션 기반과 토큰 기반 인증이 있다. 세션은 서버가 사용자의 로그인 여부를 기억하고 있는 것으로, 서버가 여러 개일 경우 세션을 공유해야 하므로 전용 데이터베이스 등 고려하 사항이 많다. 토큰 기반은 서버가 만들어주는 문자열을 이용한 것으로 사용자의 로그인 정보와 서버에서 발급되었음을 증명하는 서명이 들어 있다. 서명 데이터는 해싱 알고리즘을 통해 만들어지는데, 주로 HMAC SHA256 혹은 RSA SHA256 알고리즘이 사용된다.

해시 관련 `$ yarn add bcrypt`

토큰 발급 및 검증 `$ yarn add jsonwebtoken`

비밀키 설정 `$ openssl rand -hex 64`

Postman 요청

```js
// POST http://localhost:4000/api/auth/register
{
  username: "velopert",
  password: "mypass123"
};
// Body - x-www-form-urlencoded - key & value

// return
{
  "_id": "5e1c8c7ef26e746e678aa165",
  "username": "velopert",
  "__v": 0
}
```

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
