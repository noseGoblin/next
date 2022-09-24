import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEamil = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch();
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email' htmlFor='email'>
            Your Eamil Address
          </label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback' htmlFor='feedback'>
            Your Feedback
          </label>
          <textarea
            type='feedback'
            id='feedback'
            ref={feedbackInputRef}
          ></textarea>
          <button>Send Feedback</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
