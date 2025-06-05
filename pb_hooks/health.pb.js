routerAdd("GET", "/api/health", (c) => {
  return c.json(200, { "status": "ok" });
});
