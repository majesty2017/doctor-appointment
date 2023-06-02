const JWT = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].splite(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (error, decode) => {
          if (error) {
            return res
              .status(200)
              .send({ success: false, message: "Auth failed!" });
              next()
          } else {
            req.body.userId = decode.id;
          }
        });
    } catch (error) {
        console.log(error);
        res.status(200).send({ success: false, message: "Auth failed!" });
    }
}