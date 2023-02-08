import express, { Application} from "express";
import userRoutes from '../routes/users'

class Server {

    private app: Application;
    private port:String
    private apiPath = {
        users : '/api/users',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080'


        // Definir las rutas
        this.routes()
    }

    routes(){
        this.app.use( this.apiPath.users, userRoutes )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Running in ${this.port}`);
        })
    }

}

export default Server;