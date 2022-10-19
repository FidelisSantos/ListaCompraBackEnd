import { Router } from "express"
import Online from "./controllers/Online";
import { ProductControllers} from "./controllers";
import bodyParser from "body-parser";

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const routes = Router();

routes.get('/all', ProductControllers.list);
routes.get('/',Online.online);
routes.post('/', jsonParser ,ProductControllers.create);
routes.delete('/:id', ProductControllers.delete);
routes.get('/:id', ProductControllers.findProduct);
routes.put('/:id',jsonParser, ProductControllers.update);
export {routes};