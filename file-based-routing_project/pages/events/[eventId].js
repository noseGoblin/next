import { useRouter } from 'next/router';

function EventDetail() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Event Detail Page</h1>
    </div>
  );
}

export default EventDetail;
