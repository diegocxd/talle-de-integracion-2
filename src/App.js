import './App.css';
import TextEditor from './components/TextEditor';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
        <DragDropContext onDragEnd={(result)=> console.log(result)}>
          <div className="TextEditor" >
            <TextEditor/>
          </div> 
          <div className="plantillas">
            <h1>Plantillas:</h1>
            <Droppable droppableId="template">
              {(droppableProvided) => (
                <ul 
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                  className="templates-container"
                >
                {templates.map((template, index) => (
                  <Draggable key={template.id} draggableId={template.id} index={index}>
                    {(draggableProvided) => (
                      <li 
                        {...draggableProvided.draggableProps} 
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className="template-item" 
                      >
                        {template.text}
                      </li>
                    )}
                  </Draggable>
                  ))}
                  {droppableProvided.placeholder}
              </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
