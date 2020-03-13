import { Lb4AppApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { Person } from './custom-service/test-service';

export { Lb4AppApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4AppApplication(options);
  await app.boot();
  await app.start();
  console.log("pankaj");
  const per = new Person();
  await per.test();


  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
