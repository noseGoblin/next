import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'TEST Title',
    image: 'getting-started-nextjs.png',
    excerpt: 'test excerpt',
    date: '2022-10-02',
  },
  {
    slug: 'mastering-javascript',
    title: 'TEST Title',
    image: 'nextjs-file-based-routing.png',
    excerpt: 'test excerpt',
    date: '2022-10-02',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
