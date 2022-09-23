import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <main>
        <h1>Events Home</h1>
        <EventList items={featuredEvents} />
      </main>
    </div>
  );
}

export default Home;
