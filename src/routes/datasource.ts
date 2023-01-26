import { DataSource } from "typeorm"
import { Todo } from '../models/todo.model'
export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "mongodb://localhost:27017",
    host: "localhost",
    port: 27017,
    database: "Todo",
    entities: [Todo],
    useUnifiedTopology: true
})