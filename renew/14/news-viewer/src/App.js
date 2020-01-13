import React, { useState } from "react";
import axios from "axios";

const API_KEY = "dde474b31d0e4b6b93547c69e4f913a1";
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(NEWS_URL);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
