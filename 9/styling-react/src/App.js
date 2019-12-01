import React from "react";
import StyledButton from "./component/Button/StyledButton";

function App() {
  return (
    <div>
      <StyledButton
        big // big={true} /* 동일 */
      >
        버튼
      </StyledButton>
    </div>
  );
}

export default App;
