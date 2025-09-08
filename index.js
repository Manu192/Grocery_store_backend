const jsonserver = require("json-server");
const auth = require('json-server-auth'); 

const server = jsonserver.create();
const middlewares = jsonserver.defaults();
const router = jsonserver.router('db.json');

server.db = router.db; //  Required for json-server-auth to access DB

server.use(middlewares);
server.use(auth);       //  Auth middleware before router
server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server with Auth running on port ${PORT}`);
});
