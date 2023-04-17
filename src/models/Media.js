import mongoose from "mongoose";

/* Media Assets */

const MediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name is required"],
    },
    subTitle: {
        type: String,
    },
    description: {
        type: String,
    },
    attributes: {
        type: Array,
        required: [true, "Attributes are required"],
    },
    altImage: {
        type: String,
        required: [true, "Alt Image is required"],
    },
    protocolRef: {
        //fkey reference to all protocols mentioned in this media asset/podcast
        type: Array,
        required: [true, "Protocol Ref is required"],
    },
    video: {
        type: String,
        required: [true, "Video is required"],
    },
    articleLink: {
        //link to articls that compiles media asset, article about media/ podcast and protols associated with it
        type: String,
    },
    totalSaves: {
        type: Number,
    },
    totalShares: {
        type: Number,
    },
    totalViews: {
        type: Number,
    }
});

export default mongoose.models.Media || mongoose.model("Media", MediaSchema)