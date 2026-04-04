const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
    const { user_key, serial } = req.body;

    if (!user_key || !serial) {
        return res.json({
            status: false,
            reason: "Missing Parameters"
        });
    }

    if (user_key === "hh) {
        return res.json({
            status: false,
            data: {
                expired: "2026-04-03",
                tittle: "SCARECROW"
            }
        });
    } else {
        return res.json({
            status: false,
            reason: "Key Expire"
        });
    }
});

app.get("/", (req, res) => {
    res.send("API RUNNING");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
