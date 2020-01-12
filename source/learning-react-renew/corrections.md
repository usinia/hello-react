# 오탈자 및 개선사항

## 1.3.2 (pg. 46)

macOS에서 yarn 설치 방법이 바뀌었습니다. 명령어에 `--without-node`를 없애야 합니다.

```diff
$ brew update
- $ brew install yarn --without-node
+ $ brew instal yarn
$ yarn config set prefix ~/.yarn
$ echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bash_profile
```

## 4.2.2.1 (pg. 127)

페이지 상단의 설명에 오탈자가 있습니다.

```diff
- SyntheticEvent 및 네이티브 이벤트와 달리 이벤트가 끝나고 나면...
+ SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면...
```

## 8.2.3 (pg. 199) - 개선사항

`useEffect`를 사용하는 부분의 deps 배열이 비어있어서 ESLint 경고가 나타납니다. 이 경고를 없애기 위하여 deps 배열에 name 을 넣어주세요.

```diff
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  };
- }, []);
+ }, [name]);
```

## 16.2.10 (pg. 426)

페이지 하단 설명에 오탈자가 있습니다.

17.1 절이 아니라 16.1 절로 돌아가야합니다.

```diff
- 모두 제대로 작동한다면 17.1절로 돌아가서 다시 한번 개념을 훑어 보세요. 그리고 다음 내용을 계속 진행해주세요.
+ 모두 제대로 작동한다면 16.1절로 돌아가서 다시 한번 개념을 훑어 보세요. 그리고 다음 내용을 계속 진행해주세요.
```

## 17.7.6 (pg. 470)

파일명이 잘못되었습니다.

```diff
- containers/CounterContainer.js
+ containers/TodosContainer.js
```

## 18.3.1.5 (pg.500)

페이지 상단 `connect` 함수의 `loadingPost` 와 `loadingUsers` 부분에 오탈자가 있습니다.

```diff
export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
-   loadingPost: loading.GET_POST,
-   loadingUsers: loading.GET_USERS
+   loadingPost: loading['sample/GET_POST'],
+   loadingUsers: loading['sample/GET_USERS']
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
```

## 20.3.5 (pg. 560)

`manifest[key]` 가 아닌 `manifest.files[key]` 로 바꿔주어야 합니다.

```diff
const chunks = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key)) // chunks.js 로 끝나는 키를 찾아서
- .map(key => `<script src="${manifest[key]}"></script>) // 스크립트 태그로 변환하고
+ .map(key => `<script src="${manifest.files[key]}"></script>) // 스크립트 태그로 변환하고
  .join(''); // 합침
```

그리고 그 하단의 `main.css` 와 `main.js` 도 마찬가지로 `manifest[]` 대신 `manifest.files[]` 를 사용하세요. `runtime~main.js` 의 경우도 마찬가지이며, 최근 CRA 업데이트로 인하여 기존 `runtime~main.js` 에서 `runtime-main.js` 로 파일 이름이 변경되었습니다.

```diff
- <link href="${manifest['main.css']}" rel="stylesheet" />
+ <link href="${manifest.files['main.css']}" rel="stylesheet" />
```

```diff
- <script src="${manifest['runtime~main.js']}"></script>
+ <script src="${manifest.files['runtime-main.js']}"></script>
```

```diff
- <script src="${manifest['main.js']}"></script>
+ <script src="${manifest.files['main.js']}"></script>
```

## 22.2 (pg. 641) - 업데이트

macOS에서 MongoDB 설치하는 명령어가 바뀌었습니다.

```diff
- $ brew update
- $ brew install mongodb
- $ brew services start mongodb
- ==> Successfully started `mongodb` (label: homebrew.mxcl.mongodb)\
+ $ brew tap mongodb/brew
+ $ brew install mongodb-community@4.2
+ $ brew services start mongodb-community@4.2
+ ==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-community)
```

## 23.4.2 (pg. 697)

user.js 파일의 경로에 오탈자가 있습니다. `modles` 디렉터리가 아닌 `models` 디렉터리입니다.

```
- src/modles/user.js - generateToken
+ src/models/user.js - generateToken
```

## 24.2.6 (pg. 784)

비밀번호가 일치하지 않을 때 액션을 디스패치하는 부분에 오탈자가 있습니다. 액션 생성 함수를 호출 후 dispatch 해주어야합니다.

```
- changeField({ form: 'register', key: 'password', value: '' });
- changeField({ form: 'register', key: 'passwordConfirm', value: '' });
+ dispatch(changeField({ form: 'register', key: 'password', value: '' }));
+ dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));
```

## 25.2.1 (pg. 814)

일부 환경에서 TagForm 이 다음과 같이 버튼이 찌그러지는 현상이 나타납니다.

![](https://user-images.githubusercontent.com/17894639/65041447-c039a780-d991-11e9-8bb7-b9a3419eed90.png)

해결 방안은 input 태그에 `min-width: 0;` 속성을 넣는 것 입니다.

```diff
input {
  padding: 0.5rem;
  flex: 1;
+ min-width: 0;
}
```

## 27.1.2 (pg. 880)

`ownPost` 값을 설정하는 로직에 오탈자가 있습니다. 추가적으로 PostViewer 에서 `ownPost` 를 사용하는 코드가 빠졌습니다. 따라서, 페이지에 최소한의 수정을 하기 위하여 `ownPost` 라는 상수를 따로 선언하고 `actionButtons` props 를 설정하는 과정에서 조건부 렌더링을 하는 방식으로 수정됐습니다.

```diff
+ const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
-     actionButtons={<PostActionButtons onEdit={onEdit} />}
+     actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
-     ownPost={user && user.id === post && post.id}
    />
  );
```

## 27.2 (pg. 892)

pg.880과 같은 이유로 수정되었습니다.

```diff
+ const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
-     actionButtons={<PostActionButtons onEdit={onEdit} />}
+     actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
-     ownPost={user && user.id === post && post.id}
    />
  );
```
