import logo from './logo.svg';
import './App.css';
import TextEditor from './components/TextEditor';
import { useState } from 'react';


const initialTemplates = [
  {
    id:"1",
    text:"plantilla 1"
  },
  {
    id:"2",
    text:"plantilla 2"
  },
  {
    id:"3",
    text:"plantilla 3"
  },
  {
    id:"4",
    text:"plantilla 4"
  }
];

function App() {
  const [templates, setTemplates] = useState(initialTemplates);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Text Editor</h1>
      </header>
      <div className="container">
        <div className="nav">
          <nav>Nav</nav>
        </div>
        <div className="TextEditor">
          <TextEditor/>
        </div> 
        <div className="plantillas">
          <h1>Plantillas:</h1>
          <ul className="templates-container">
            {templates.map((template) => (
              <li className="template-item" key={template.id}>{template.text}</li>
              ))}
          </ul>
        </div>
        </div>
    </div>
  );
}

export default App;
