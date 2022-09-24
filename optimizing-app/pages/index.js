import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function Home(props) {
  return (
    <div>
      <main>
        <h1>Events Home</h1>
        <EventList items={props.events} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default Home;
