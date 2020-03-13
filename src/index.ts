import { Lb4AppApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { Person } from './custom-service/test-service';
import { UserRepository } from './repositories';
import { Context, inject } from '@loopback/context';
export { Lb4AppApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4AppApplication(options);
  await app.boot();
  await app.start();

  //injecting dependency here



  const context = new Context();
  context.bind('userrepo').toClass(UserRepository);


  console.log("pankaj");
  const ld = new Person(lt);

  //dependency injection done


  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
