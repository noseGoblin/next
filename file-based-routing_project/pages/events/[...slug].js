import { useRouter } from 'next/router';

function EventCategory() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Events By Category</h1>
    </div>
  );
}

export default EventCategory;
