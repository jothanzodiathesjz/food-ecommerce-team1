const route = require('express').Router()
const UserController = require('../controllers/UserController')
const router = require("express").Router();
const User = require("../models/User");
const auth = require("../middlewares/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



route.get('/user', UserController.getUser)

module.exports = route


// Register route
router.post("/register", async (req, res) => {
    try {
        const { email, password, passwordCheck, username, role } = req.body;

      // validate
        if (!email || !password || !passwordCheck || !username || !role) {
        return res.status(400).json({ msg: "Not all fields have been entered" });
        }

        if (password.length < 5) {
        return res
            .status(400)
            .json({ msg: "The password needs to be at least 5 characters long" });
        }

      // cek input password vs password checker
        if (password !== passwordCheck) {
        return res
            .status(400)
            .json({ msg: "Passwords do not match. Please try again" });
        }

      // cek data email db 
        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
        return res
            .status(400)
            .json({ msg: "An account with this email already exists" });
        }

      // bcrypt password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
        email: email,
        password: passwordHash,
        username: username,
        role: role
        });
        const savedUser = await newUser.save();
        res.json(savedUser);

      // Catch error
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
    });

  // login route
    router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

      // validate

        if (!email || !password) {
        return res.status(400).json({ msg: "Not all fields have been entered" });
        }

      // cek email / authentifikasi
        const user = await User.findOne({ email: email });
        if (!user) {
        return res
            .status(400)
            .json({ msg: "Invalid credentails" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
        }

      // json token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
        token,
        user: {
            id: user._id,
            username: user.username
        },
        });
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
    });

  // delete user
    router.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
    });

    router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
    });

    router.get("/", auth, async (req,res) => {
    const user = await User.findById(req.user)
    res.json({
        username: user.username,
        id: user._id
    })
    });

    module.exports = router;
