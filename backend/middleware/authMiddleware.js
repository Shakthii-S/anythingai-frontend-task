const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {

    const header = req.header("Authorization");

    if (!header) {
        return res.status(401).json({ message: "No token, access denied" });
    }

    try {

        const token = header.split(" ")[1]; // VERY IMPORTANT FIX

        const decoded = jwt.verify(token, "secretkey");

        req.user = decoded;

        next();

    } catch {

        res.status(401).json({ message: "Invalid token" });

    }
};
