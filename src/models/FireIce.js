import mongoose from "mongoose";

/* FireIce in the db */

const FireIceSchema = new mongoose.Schema({
    nature: {
        type: Boolean,
        required: [true, "Nature is required"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
    },
    state: {
        type: String,
        required: [true, "State is required"],
    },
    country: {
        type: String,
        required: [true, "Country is required"],
    },
    phone : {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    services: {
        type: Array,
    },
    rating: {
        type: String,
    },
    visits: {
        type: String,
    },
    hours: {
        type: Array,
    },
    startingPrice: {
        type: String,
    },
    promotionExists: {
        type: Boolean,
    },
    promotionDescription: {
        type: String,
    },
})

export default mongoose.models.FireIce || mongoose.model("FireIce", FireIceSchema)
