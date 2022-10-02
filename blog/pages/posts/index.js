import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'test',
    title: 'TEST Title',
    image: 'getting-started-nextjs.png',
    excerpt: 'test excerpt',
    date: '2022-10-02',
  },
  {
    slug: 'test2',
    title: 'TEST Title',
    image: 'getting-started-nextjs.png',
    excerpt: 'test excerpt',
    date: '2022-10-02',
  },
  {
    slug: 'test3',
    title: 'TEST Title',
    image: 'getting-started-nextjs.png',
    excerpt: 'test excerpt',
    date: '2022-10-02',
  },
  {
    slug: 'test4',
    title: 'TEST Title',
    image: 'getting-started-nextjs.png',
    excerpt: 'test excerpt',
    date: '2022-10-02',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
