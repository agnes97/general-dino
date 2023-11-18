import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const router = new Router();

router.get("/api/portfolio", ({ request, response }) => {
  response.body = "Hello World!";
});

const portfolioApp = new Application();
portfolioApp.use(router.routes());
portfolioApp.use(router.allowedMethods());

export default portfolioApp.handle