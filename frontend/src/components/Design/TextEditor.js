// src/components/Design/TextEditor.js
import React, { useState, useRef } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextEditor.css';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef(null);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onTab = (e) => {
    const maxDepth = 4;
    setEditorState(RichUtils.onTab(e, editorState, maxDepth));
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <div className="text-editor-container">
      <div className="toolbar mb-3 d-flex align-items-center">
        <select className="form-select d-inline-block w-auto me-2">
          <option value="Canva Sans">Canva Sans</option>
        </select>
        <button className="btn btn-secondary me-2" onMouseDown={(e) => e.preventDefault()}>-</button>
        <button className="btn btn-secondary me-2" onMouseDown={(e) => e.preventDefault()}>+</button>
        <button className="btn btn-secondary me-2" onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('BOLD'); }}>B</button>
        <button className="btn btn-secondary me-2" onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('ITALIC'); }}><i>I</i></button>
        <button className="btn btn-secondary me-2" onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('UNDERLINE'); }}><u>U</u></button>
        <button className="btn btn-secondary me-2" onMouseDown={(e) => e.preventDefault()}>S</button>
      </div>
      <div className="editor border p-3" onClick={() => editorRef.current.focus()}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onTab={onTab}
          onChange={setEditorState}
          ref={editorRef}
        />
      </div>
    </div>
  );
};

export default TextEditor;
