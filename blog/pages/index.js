import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
