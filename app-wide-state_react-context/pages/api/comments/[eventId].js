import { useContext } from 'react';

import NotificationContext from '../../../store/notification-context';

import {
  connectDatabse,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabse();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

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
      client.close();
      return;
    }

    let notificationCt;

    notificationCtx.showNotification({
      title: 'New comment!',
      messag: 'Loading new comment...',
      status: 'pending',
    });
    notificationCt.useContext(NotificationContext);

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment.', comment: newComment });
      notificationCtx = await showNotification({
        title: 'New Comment!',
        messag: 'Your comment is posted',
        status: 'success',
      });
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' });
      notificationCtx = await showNotification({
        title: 'Cannot add comment!',
        messag: 'DANGER: Failed to post comment!',
        status: 'error',
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(
        client,
        'comments',
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed!' });
    }
  }

  client.close();
}

export default handler;
