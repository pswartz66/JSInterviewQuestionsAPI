import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';

const Submit = () => {
  return (
    <div className="submitContainer">
      <div className="submitContent">
        <h2>Question</h2>
        <div className="submitRow">
          <textarea className="questionTextArea" placeholder="Enter a question to be added to the API...">

          </textarea>

          <div className="checkboxes">
            <div className="difficulty">
              <input type="checkbox" id="easy" name="easyQ" />
              <label for="Easy">Easy</label>
            </div>
            <div className="difficulty">
              <input type="checkbox" id="medium" name="mmediumQ" />
              <label for="Medium">Medium</label>
            </div>
            <div className="difficulty">
              <input type="checkbox" id="hard" name="hardQ" />
              <label for="Hard">Hard</label>
            </div>
          </div>
        </div>
        <Button
          className="submitBtn"
          variant="primary"
          size="lg">
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Submit;
