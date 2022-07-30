import { Button, Radio } from "antd";
import { getAllStudents } from "./client.js";
import './App.css';

function App() {
  getAllStudents()
    .then(res => res.json())
    .then(console.log)
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <br/>
      <Radio.Group value="large">
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default App;
