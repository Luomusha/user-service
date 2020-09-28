import app from './app';
import sequelize from './db';


sequelize.authenticate()
    .then(() => {
      console.log('server listen 7001');
      return sequelize.sync({force: true});
    })
    .then(() => {
      console.log('db connected...');
      app.listen(7001);
    });

