import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getCharacterCount = () => {
    return text.length;
  };

  const getWordCount = () => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const getLineCount = () => {
    return text.split(/\n/).length;
  };

  return (
    <div className="App">
      <h1>Real-time Textarea Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows="10"
        cols="50"
      />
      <div className="counter">
        <p>Characters: {getCharacterCount()}</p>
        <p>Words: {getWordCount()}</p>
        <p>Lines: {getLineCount()}</p>
      </div>
    </div>
  );
}

export default App;