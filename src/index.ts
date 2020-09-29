import app from './app';
import sequelize from './db';
import {USER_SERVICE_PORT} from "./config";


sequelize.authenticate()
  .then(() => {
    console.log('server listen at', USER_SERVICE_PORT);
    return sequelize.sync({force: false});
  })
  .then(() => {
    console.log('db connected...');
  })
  .catch(() => {
    console.log('db connection failed...')
    setTimeout(() => {
      return sequelize.authenticate()
    }, 1000)
  });
app.listen(USER_SERVICE_PORT);

