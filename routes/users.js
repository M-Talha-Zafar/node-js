const express = require("express");
const User = require("../models/user");
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get list of users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: object
 *           properties:
 *             users:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get("/", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "TZ" },
      { id: 2, name: "Summer" },
    ],
  });
});

/**
 * @swagger
 *   /users:
 *     post:
 *       summary: Create a new user
 *       description: Creates a new user with the provided name, email, and password.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Name of the user.
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: Email address of the user.
 *                 password:
 *                   type: string
 *                   description: Password of the user.
 *               required:
 *                 - name
 *                 - email
 *                 - password
 *       responses:
 *         '200':
 *           description: User saved successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Success message.
 *         '500':
 *           description: Error saving user.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message.
 */

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  console.log({ name, email, password });
  const user = new User({ name, email, password });
  try {
    const result = await user.save();
    console.log(result);
    res.status(200).json({ message: "User saved successfully" });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

module.exports = router;
