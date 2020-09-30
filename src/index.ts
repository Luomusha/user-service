import app from './app';
import sequelize from './db';
import {USER_SERVICE_PORT} from './config';

sequelize.authenticate().then(() => {
  console.log('db connected...');
  return sequelize.sync({force: true});
}).then(() => {
  console.log('server listen at', USER_SERVICE_PORT);
  app.listen(USER_SERVICE_PORT);
}).catch(() => {
  process.exit(1);
});

