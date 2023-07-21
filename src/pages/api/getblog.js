import blogModel from "../../db/models/BlogModel";

export const config = {
  api: {
    externalResolver: true,
  },
};

const verifyToken = (req, res) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const val = bearerToken === process.env.TOKEN;
    return new Promise((resolve, reject) => {
      if (val) {
        resolve();
      } else {
        reject();
      }
    });
  }
  return new Promise((resolve, reject) => {
    reject();
  });
};

export default function handler(req, res) {
  if (req.method === "GET") {
    const object = {
      status: true,
      msg: "sever is running",
    };
    res.status(200).json(object);
  } else if (req.method === "POST") {
    verifyToken(req, res)
      .then(async () => {
        const { slug } = req.body;
        const result = await blogModel.findOne({ slug: slug });
        if (result) {
          const object = {
            status: true,
            msg: "blog found successfully",
            data: result,
          };
          res.status(200).send(object);
        } else {
          const object = {
            status: false,
            msg: "blog doesn't exists",
          };
          res.status(200).send(object);
        }
      })
      .catch(() => {
        const object = {
          status: false,
          msg: "unauthorized",
          statusCode: 403,
          redirectUri: "www.trendbyte.tech",
        };
        res.status(403).json(object);
      });
  }
}
