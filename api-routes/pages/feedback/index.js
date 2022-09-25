import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedBackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback();
  return {
    props: {
      feedBackItems: data,
    },
  };
}

export default FeedbackPage;
