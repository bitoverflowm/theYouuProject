import mongoose from "mongoose";

/* Protocol Catalogue Media Assets */

const ProtocolCatalogueSchema = new mongoose.Schema({
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
    protocolLink: {
        type: String,
        required: [true, "Protocol Link is required"],
    },
    video: {
        type: String,
        required: [true, "Video is required"],
    },
    articleLink: {
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

export default mongoose.models.ProtocolCatalogue || mongoose.model("ProtocolCatalogue", ProtocolCatalogueSchema)