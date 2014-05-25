var routes = require('./routes/index.js');
module.exports = function(app){
  app.get('/',routes.index);
  app.get('/tianshu',routes.tianshu);
  app.get('/self',routes.self);
  app.get('/markdown',routes.markdown);
};
