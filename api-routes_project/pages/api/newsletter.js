import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://JacobM:9I0a8vupVsVi3Gip@cluster0.ryf9npw.mongodb.net/newsletter?retryWrites=true&w=majority'
    );
    const db = client.db();

    await db.collection('emails').insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: 'Happy Registration!' });
  }
}

export default handler;
