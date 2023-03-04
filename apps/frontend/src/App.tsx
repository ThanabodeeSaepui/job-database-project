import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState<String | any>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8080');
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Front Page</h1>
      <p>Testing API : {data}</p>
    </div>
  )
}

export default App
