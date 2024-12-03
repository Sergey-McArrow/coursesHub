import jwt from "jsonwebtoken";

export const authJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log({ cookie: req.cookies });
  console.log({ token });

  //   if (!token) {
  //   return res.status(401).json({ message: "Token not provided" });
  // }
  // jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
  //     if (err) {
  //       return res.status(401).json({ message: "Unauthorized" });
  //     }
  //     req.user = decoded;
  //   });
  next();
};
