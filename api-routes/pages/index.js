function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <form action=''>
        <div>
          <label htmlFor='email' htmlFor='email'>
            Your Eamil Address
          </label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='feedback' htmlFor='email'>
            Your Feedback
          </label>
          <textarea type='feedback' id='email'></textarea>
          <button>Send Feedback</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
