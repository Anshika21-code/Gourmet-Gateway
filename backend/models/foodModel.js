import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    image: String,
    category: {
        type: String,
        required: true
    }
});

const foodModel = mongoose.model("food", foodSchema);

export default foodModel;
