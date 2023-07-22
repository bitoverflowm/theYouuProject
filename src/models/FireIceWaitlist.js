import mongoose from "mongoose";

/* FireIceWaitlist in the db; for at home hot/cold registrants */

const FireIceWaitlistSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    inputServices: {
        type: Array,
    },
    cityVal: {
        type: String,
        required: [true, "Country is required"],
    },
    otherVal: {
        type: String,
    },
})

export default mongoose.models.FireIceWaitlist || mongoose.model("FireIceWaitlist", FireIceWaitlistSchema)
