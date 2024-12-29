import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

//@Injectable decorator marks the class for registration inside the DI container
@Injectable()
export class MessagesService {
  //Automatically make a messagesRepo property and initializes it
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
