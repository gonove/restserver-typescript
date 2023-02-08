import express, { Application} from "express";
import userRoutes from '../routes/users'
import cors from "cors";

class Server {

    private app: Application;
    private port:String
    private apiPath = {
        users : '/api/users',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080'

        // Metodos iniciales
        this.middlewares();
        this.routes()
    }

    middlewares(){

        // CORS
        this.app.use( cors() )

        // Lectura del body
        this.app.use( express.json() )

        // Carpeta publica
        this.app.use( express.static('public') )
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