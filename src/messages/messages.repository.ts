import { readFile, writeFile } from 'fs/promises';
import { json } from 'stream/consumers';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const message = JSON.parse(contents);

    return message;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999); //For whole number instead of decimal
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
