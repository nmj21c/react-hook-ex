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
      setPayload(res);
    } catch {
      setError("ㅜ.ㅜ");
    } finally {
      setLoading(false);
    }
  };

  return { payload, loading, error };
};

const App = () => {
  const name = useInput();
  console.log(name);
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="Whats your name" />
    </div>
  );
};

export default App;
