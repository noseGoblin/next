import { MongoClient } from 'mongodb';

async function connectDatabse() {
  const client = await MongoClient.connect(
    'mongodb+srv://JacobM:9I0a8vupVsVi3Gip@cluster0.ryf9npw.mongodb.net/events?retryWrites=true&w=majority'
  );

  return client;
}

async function insertDocument(client, document) {
  const db = client.db();

  await db.collection('newsletter').insertOne(document);
}

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;

    try {
      client = await connectDatabse();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail });
      await client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Happy Registration!' });
  }
}

export default handler;
