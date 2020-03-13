import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import { UserRepository } from '../repositories';
import { Context, inject } from '@loopback/context';

export class Person {
  public contextclas = new Context()
  constructor() {


  }
  async test(): Promise<void> {
    console.log("name pankaj");
    const lt: UserRepository = this.contextclas.getSync('userrepo');
    await lt.count();

  }
}
