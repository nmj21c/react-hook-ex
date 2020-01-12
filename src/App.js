import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  return { value, onChange };
};

const useFetch = url => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const res = await axios.get(url);
      // throw Error();
      setPayload(res);
    } catch {
      setError("ㅜ.ㅜ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
};

const App = () => {
  const name = useInput();
  const { payload, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input type="text" {...name} placeholder="Whats your name" />
      {loading && <span>loading</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && console.log(payload)}
    </div>
  );
};

export default App;
