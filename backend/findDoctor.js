const router = require("express").Router();
const db = require("./db");
const doctor = require("./doctorModel");

router.post("/doctors", async (req, res) => {
    try {
        await db();
        const body = req.body;

        const doctors = await doctor.find({
            $and: [{ specialty: body.specialty }, { area: body.area }]
        });

        console.log(doctors);
        res.send(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
