export const apiRoutes = {
  '/api/hello': {
    GET: () => {
      return new Response("Hello World de rien");
    }
  }
}
