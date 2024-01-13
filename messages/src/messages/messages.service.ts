import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private readonly repository: MessagesRepository;

  constructor() {
    // Nest uses dependency injection, don't do this in real apps
    this.repository = new MessagesRepository();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  findAll() {
    return this.repository.findAll();
  }

  create(message: string) {
    return this.repository.create(message);
  }
}
