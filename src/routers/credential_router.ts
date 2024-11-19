import {
    delete_credential_id_controller,
    get_credential_controller,
    get_credential_id_controller,
    post_credential_controller,
    update_credential_id_controller
} from "../controllers/credential_controller";
import { Router } from "express";
import { schemaValidate } from "../middlewares/schema_middleware";
import { credential_schema } from "../schemas/credential_schema";
import { validate_token } from "../middlewares/valid_token_middleware";

const credential_router = Router();

credential_router.post("/credentials", validate_token, schemaValidate(credential_schema), post_credential_controller)
credential_router.get("/credentials", validate_token, get_credential_controller)
credential_router.get("/credentials/:id", validate_token, get_credential_id_controller)
credential_router.put("/credentials/:id", validate_token, schemaValidate(credential_schema), update_credential_id_controller)
credential_router.delete("/credentials/:id", validate_token, delete_credential_id_controller)

export default credential_router