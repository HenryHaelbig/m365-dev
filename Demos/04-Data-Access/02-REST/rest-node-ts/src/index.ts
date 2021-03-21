import { SPRestClient } from "./SPRestClient";

(<any>window).runSample = runSample;

export async function runSample() {
  const client = await authClient();

  const title = await client.query("/web/title");
  console.log("Title of the web", title);

  const lists = await client.query("/web/lists");
  console.log("Lists of the web", lists);
}

(<any>window).authClient = authClient;

export async function authClient() {
  var cfg = await fetch("msal-config.json").then((response) => response.json());
  const client = new SPRestClient(cfg);
  (<any>window).spRest = client;
  client.logInfo();
  await client.logIn();
  return client;
}
