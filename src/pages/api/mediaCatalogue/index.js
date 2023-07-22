import dbConnect from '@/lib/dbConnect';
import Media from '@/models/Media';

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();
    switch (method) {
        case "GET":
            try{
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.itemsPerPage) || 10;

                const startIndex = (page - 1) * limit;

                const media = await Media.find({}).skip(startIndex).limit(limit); /* Find all Media db entries */
                res.status(200).json({success: true, data: media});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case "POST":
            try{
                const media = await Media.create(req.body); /* Create a new Media db entry */
                res.status(201).json({success: true, data: media});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}