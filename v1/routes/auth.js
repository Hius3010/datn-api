import express from "express";
import { Register , Login } from "../controllers/auth.js";
import Validate from "../middleware/validate.js";
import { check } from "express-validator";

const router = express.Router();

// Register route -- POST request
router.post(
    "/register",
    check("name")
        .not()
        .isEmpty()
        .withMessage("You name is required")
        .trim()
        .escape(),
    check("password")
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage("Must be at least 8 chars long"),
    Validate,
    Register
);

router.post(
    "/login",
    check("name").not().isEmpty(),
    check("password").not().isEmpty(),
    Validate,
    Login
);

export default router;