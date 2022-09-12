import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id or router.query.projectid

  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  );
}
