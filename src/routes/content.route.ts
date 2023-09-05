import { Router } from "express";

// Import controllers
import { contentCreate, contentList } from "../controllers/content.controller";

// Create router instance

const router = Router();

// Create routes

router.get("/content-list", contentList);
router.post("/content-create", contentCreate);

// Export router instance

export default router;
