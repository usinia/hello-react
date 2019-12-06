const loggerMiddleware = store => next => action => {
  /* 미들웨어 내용 */
  /* 1. 현재 상태
      2. 액션 정보
      3. 리듀서가 처리한 다음의 새로운 상태 */

  // 현재 스토어 상태 값 기록
  console.log("현재 상태", store.getState());
  // 액션 기록
  console.log("액션", action);

  // 액션을 다음 미들웨어 또는 리듀서로 넘깁니다.
  const result = next(action);

  // 액션 처리 후의 스토어 상태를 기록합니다.
  console.log("다음 상태", store.getState());
  console.log("\n"); // 기록을 구분 개행

  return result; // 여기서 반환하는 값은 store.dispatch(ACTION_TYPE)했을 때 결과로 설정합니다.
};

export default loggerMiddleware; // 불러와 사용할 수 있도록 내보냅니다.
