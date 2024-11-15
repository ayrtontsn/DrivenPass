import { post_credential_controller } from "../controllers/credential_controller";
import { Router } from "express";
import { schemaValidate } from "../middlewares/schema_middleware";
import { credential_schema } from "../schemas/credential_schema";
import { validate_token } from "../middlewares/valid_token_middleware";

const credential_router = Router();

credential_router.post("/credentials",validate_token,schemaValidate(credential_schema),post_credential_controller)

export default credential_router