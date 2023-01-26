const fastify = require('fastify');
import { AppDataSource } from './datasource';
import * as controller from '../controllers/todo.controller';

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        const app = fastify();

        app.get('/', controller.findAll)
        app.post('/', controller.create);
        app.get('/:id', controller.findOne);
        app.put('/:id', controller.update);
        app.delete('/:id', controller.deleteOne);

        return app.listen({port: 3002}, (err, address) => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
          console.log(`Server running on ${address}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
