import blogModel from "../../db/models/blogModel";

export default async (req, res) => {
  if (req.method === "GET") {
    const object = {
      status: true,
      msg: "sever is running",
    };
    res.status(200).json(object);
  } else if (req.method === "POST") {
    const { slug } = req.body;
    const result = await blogModel.findOne({ slug: slug });
    if (result) {
      const object = {
        status: true,
        msg: "blog found successfully",
        data: result,
      };
      res.status(200).json(object);
    } else {
      const object = {
        status: false,
        msg: "blog doesn't exists",
      };
      res.status(200).json(object);
    }
  }
};
