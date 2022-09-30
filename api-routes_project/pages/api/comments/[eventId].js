import { MongoClient } from 'mongodb';
// import { getAllDocuments } from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    'mongodb+srv://JacobM:9I0a8vupVsVi3Gip@cluster0.ryf9npw.mongodb.net/events?retryWrites=true&w=majority'
  );

  if (req.method === 'POST') {
    // add server side validation
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection('comments').insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: 'Added comment.', comment: newComment });
  }

  if (req.method === 'GET') {
    const db = client.db();

    const documents = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();

    // const documents = await getAllDocuments(
    //   client,
    //   'comments',
    //   { _id: -1 },
    //   { eventId: eventId }
    // );

    res.status(200).json({ comments: documents });
  }

  await client.close();
}

export default handler;
