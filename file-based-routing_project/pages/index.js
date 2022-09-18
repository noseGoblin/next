import { getFeaturedEvents } from '../dummy-data';

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <main>
        <h1>Events Home</h1>
      </main>
    </div>
  );
}

export default Home;
