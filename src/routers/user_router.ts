import { Router } from "express";
import { delete_user_controller, get_user_controller, post_user_controller } from "../controllers/user_controller";
import { schemaValidate } from "../middlewares/schema_middleware";
import { signIn_schema, signUp_schema } from "../schemas/user_schema";
import { validate_token } from "../middlewares/valid_token_middleware";

const user_router = Router();

user_router.post("/sign-up",schemaValidate(signUp_schema) ,post_user_controller)
user_router.post("/sign-in",schemaValidate(signIn_schema) ,get_user_controller)
user_router.delete("/erase", validate_token, delete_user_controller)

export default user_router