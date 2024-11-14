import { Router } from "express";
import { post_user_controller } from "../controllers/user_controller";
import { schemaValidate } from "../middlewares/schema_middleware";
import { phone_schema } from "../schemas/user_schema";

const user_router = Router();

user_router.post("/sign-up",schemaValidate(phone_schema) ,post_user_controller)

export default user_router