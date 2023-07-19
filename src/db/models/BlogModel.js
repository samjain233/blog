require("../conn");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  slug : String,
  heading : String,
  metatags : String,
  title : String,
  content : String
});

export default mongoose.models.BlogData || mongoose.model("BlogData", blogSchema);

