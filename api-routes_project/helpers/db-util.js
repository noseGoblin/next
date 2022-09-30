export async function getAllDocuments(client, collection, sort, filter = {}) {
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
}
