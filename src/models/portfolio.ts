import { models, model, Schema } from "mongoose";

const portfolioSchema = new Schema({
  title: {
    type: String,
    require: [true, "The title of this post is required"],
  },
  username: {
    type: String,
    require: [true, "Your username is required"],
  },
  image: {
    type: String,
    require: [true, "Image path is require"],
  },
});

const Portfolio = models.portfolio || model("portfolio", portfolioSchema);

export default Portfolio;
