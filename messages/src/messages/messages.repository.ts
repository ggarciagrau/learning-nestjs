import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  private readonly dbTable = 'messages.json';
  private readonly encoding = 'utf-8';

  async findOne(id: string) {
    const contents = await readFile(this.dbTable, this.encoding);
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile(this.dbTable, this.encoding);
    return JSON.parse(contents);
  }

  async create(message: string) {
    const contents = await readFile(this.dbTable, this.encoding);
    const messages = JSON.parse(contents);

    const newId = Math.floor(Math.random() * 999);

    messages[newId] = {
      id: newId,
      content: message,
    };

    await writeFile(this.dbTable, JSON.stringify(messages));
    return messages[newId];
  }
}
