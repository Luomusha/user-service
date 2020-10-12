import app from './app';
import {mongoose, sequelize} from './db';
import {MONGO_URI, USER_SERVICE_PORT} from './config';

sequelize.authenticate().then(() => {
  console.log('mysql connected...');
  return sequelize.sync({force: true});
}).then(() => {
  console.log('mysql sync...');
});

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(() => {
  console.log('mongo connected...')
}).catch((e) => {
  console.log(e)
})

app.listen(USER_SERVICE_PORT);
console.log('server listen at', USER_SERVICE_PORT);

