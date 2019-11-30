import React from "react";
// import classNames from "classnames";
import classNames from "classnames/bind";
import styles from "./App.css";

const cx = classNames.bind(styles); /* bind로 styles 생략 가능 */

console.log(styles);

function App() {
  const isBlue = true;
  return (
    <div
      // className={[styles.box, styles.blue].join(" ")}
      // className={classNames(styles.box, styles.blue)}
      // className={classNames(cx("box", "blue"))}
      className={classNames(cx("box", { blue: isBlue }))} /* 다양한 형식 지원 */
    />
  );
}

export default App;
