const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        try {
            const owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(503).send("not permitted for it");
            }
            let { fullname, email, password } = req.body;
            let createOwner = await ownerModel.create({
                fullname,
                email,
                password,
                name
            });
            res.status(201).send(createOwner);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });
}

router.get("/", (req, res) => {
    res.send("hey from owner");
});

module.exports = router;
