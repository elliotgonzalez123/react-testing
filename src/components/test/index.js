import React, { useState } from 'react';
import './styles.scss';

const Test = ({ onTestClick }) => {
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({ comment: '' });

  const onTextChange = e => {
    setFormData({ ...formData, comment: e.target.value });
  };

  const onTextSubmit = e => {
    e.preventDefault();
    setFormData({ ...formData, comment: '' });
  };
  return (
    <div>
      <h1>I'm a test</h1>
      <button
        id="btn-1"
        className={!toggle ? 'test-btn' : 'tested-btn'}
        onClick={e => {
          setToggle(!toggle);
          onTestClick();
        }}
      >
        {!toggle ? 'test button' : 'tested button'}
      </button>
      <div className="form-div">
        <form onSubmit={onTextSubmit}>
          <textarea value={formData.comment} onChange={onTextChange}></textarea>
          <div>
            <button id="btn-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test;
