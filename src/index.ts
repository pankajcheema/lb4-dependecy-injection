import { Lb4AppApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { Lb4AppApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4AppApplication(options);
  await app.boot();
  await app.start();
  console.log("pankaj");

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
