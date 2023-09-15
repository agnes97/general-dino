import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const router = new Router();

router.get("/api/party", ({ request, response }) => {
  response.body = "PP rules 2!";
});

const ppApp = new Application();
ppApp.use(router.routes());
ppApp.use(router.allowedMethods());

export default ppApp.handle