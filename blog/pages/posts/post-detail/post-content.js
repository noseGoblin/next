import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POSTS = {
  slug: 'getting-started-with-nextjs',
  title: 'TEST Title',
  image: 'getting-started-nextjs.png',
  excerpt: 'test excerpt',
  date: '2022-10-02',
  content: '# This is a test post',
};

function PostConent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostConent;
