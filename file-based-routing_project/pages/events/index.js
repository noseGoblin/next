import Link from 'next/link';

function EventsPage() {
  const events = [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
  ];

  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <Link
              href={{
                pathname: 'events/[id]',
                query: { id: e.id },
              }}
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
