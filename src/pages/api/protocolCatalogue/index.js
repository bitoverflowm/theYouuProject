import dbConnect from "@/lib/dbConnect";
import ProtocolCatalogue from "@/models/ProtocolCatalogue";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();
    switch (method) {
        case "GET":
            try{
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.itemsPerPage) || 10;

                const startIndex = (page - 1) * limit;

                const protocolCatalogues = await ProtocolCatalogue.find({}).skip(startIndex).limit(limit); /* Find all Protocol Catalogue db entries */
                res.status(200).json({success: true, data: protocolCatalogues});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case "POST":
            try{
                const protocolCatalogue = await ProtocolCatalogue.create(req.body); /* Create a new Protocol Catalogue db entry */
                res.status(201).json({success: true, data: protocolCatalogue});
            } catch (error) {
                res.status(400).json({success: false});
            }  
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}