# hello-react

리액트를 다루는 기술(김민준) 실습 코드

<br/>

<br/>

---


# 리액트를 다루는 기술 (실무에서 알아야 할 기술은 따로 있다!)
- 김민준

## 1. 리액트 시작

### 리액트 이해

리액트는 자바스크립트 라이브러리로 유저 인터페이스를 만드는 데 사용한다.
구조가 MVC, MVW 등인 프레임워크와 달리 __오직 V(View)만 신경 쓰는 라이브러리__

컴포넌트 : 특정 부분이 어떻게 생길지 정하는 선언체, 템플릿과는 다른 개념.
템플릿은 데이터셋이 주어지면 HTML 태그 형식을 문열로 반환하는데, 컴포넌트는 더 복잡한 개념이다. 컴포넌트는 재사용이 가능한 API로 수많은 기능들을 내장하고 있다. 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을 정의한다.
초기 렌더링 이후 데이터 변경시 Virtual DOM 을 사용하여 리렌더링해 DOM 업데이트 최소화


### 리액트 특징

DOM(Document Object Model) 자체는 빠르다. DOM 변화 일어났을 경우 웹브라우저가 css를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트 하는 과정이 오래 걸린다. 이를 위해 리액트는 리렌더링 한 Virtual DOM과 기존 DOM 트리를 비교하여 변경된 DOM만 적용한다.

Virtual DOM을 사용한다고 해서 무조건 빠른 것은 아니다.
__지속적으로 데이터가 변화하는 대규모 애플리케이션 구축하기__ 위해 리액트가 만들어졌기 때문
단순 라우팅 정도만 있는 정적인 페이지 같은 간단한 작업일 경우 오히려 리액트를 사용하지 않은 편이 성능이 낫다.
업데이트 처리 간결성이 목적, 업데이트 하는 과정에서 생기는 복잡함을 모두 해소하고 더욱 쉽게 업데이트에 접근 가능

MVC 또는 MVW 구조를 지향하지 않고 뷰만을 담당하기 때문에 AJAX, 데이터 모델링, 라우팅 등은 별도의 라이브러리를 사용해 구현해야한다. 혹은 AngularJS, Backbone.js, Meteor 와 혼용하여 사용할 수도 있다.


### 작업 환경설정

Node.js - 크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임, 웹 브라우저 환경이 아닌 곳에서도 자바스크립트를 사용하여 연산할 수 있다.
npm - Node.js 패키지 매니저로 개발자가 만든 모듈(재사용 가능한 코드)을 설치하고 해당 모듈 버전을 관리하는 도구
nvm - Node.js를 여러 버전으로 설치하여 관리해 주는 도구. 버전을 업데이트 하거나 프로젝트별 다른 버전을 사용할 때 용이

```shell
# 설치
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

# 터미널 재시작 후
$ nvm --version

# 터미널 재시작 후 버전이 나타나지 않으면
$ vim ~/.bash_profile

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Node.js LTS 버전 설치
$ nvm install --lts
```


yarn - npm 문제점(의존하는 라이브러리 개수가 많으면 속도가 저하되고, 의존하는 버전이 설치되는 시점을 기준으로 결정하기 때문에 설치하는 시기에 따라 다른 버전 설치 가능성 존재)을 개선한 패키지 매니저로 npm 대체, 패키지를 훨씬 빠르게 설치할 수 있음

```shell
# homebrew 설치
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew update
$ brew install yarn
$ echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bash_profile
$ yarn --version
```


VS Code - 코드 에디터

확장 프로그램

1. __ESLint (자바스크립트 문법 체크)__

2. Relative Path (상대 경로에 있는 파일 경로를 편하게 작성할 수 있는 도구)

3. Guides (들여쓰기 가이드라인을 그려 줍니다)

4. __React code snippets (제작자 Charalampos Karypidis)__

5. React-beautify (리액트 코드 정리)


Git 설치


create-react-app으로 프로젝트 생성
Node.js 기반 개발 도구 webpack, 바벨 등을 사용하려면 각 도구를 설치하고 설정해야 한다. create-react-app 도구를 사용하면 복잡한 설정을 하지 않고 바로 리액트 프로젝트를 만들 수 있다.

```shell
# 설치
$ yarn gloal add create-react-app

# 프로젝트 생성
$ create-react-app ${PROJECT_NAME}

# 프로젝트 실행
$ yarn start
```


## 2. JSX

### JSX란?

JSX는 자바스크립트의 확장 문법으로 XML과 매우 비슷하게 생겼다. babel-loader로 번들링 되면서 자바스크립트로 변환한다. HTML 코드를 작성하는것과 비슷하기 때문에 자바스크립트로 작성한 것보다 가독성도 높고 작성하기 쉽다. 리액트용이기 때문에 공식 자바스크립트 문법은 아니다.

```javascript
# JSX
var a = (
	<div>
		<h1>Awesome <b>React</b></h1>
	</div>
)

# 자바스크립트로 변환된 코드
var a = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Awesome ",
		React.createElement(
			"b",
			null,
			"React"
		)
	)
);
```

JSX에 오류가 있다면, 바벨이 코드를 변환하는 과정에서 이를 감지한다. 또한 span, div 같은 HTML 태그를 사용할 뿐 아니라 만든 컴포넌트도 마치 HTML 태그 쓰듯이 JSX 안에서 작성할 수 있다.