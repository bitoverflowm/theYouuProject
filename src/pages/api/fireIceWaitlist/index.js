import dbConnect from "@/lib/dbConnect";
import FireIceWaitlist from "@/models/FireIceWaitlist";
//import FireIce from "@/models/FireIceWaitlist";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try{
                const fireIceWaitlist = await FireIceWaitlist.find({}); /* Find all Fire and Ice db entries */
                res.status(200).json({success: true, data: fireIceWaitlist});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case "POST":
            try{
                const fireIceWaitlist = await FireIceWaitlist.create(req.body); /* Create a new Fire and Ice db entry */
                res.status(201).json({success: true, data: fireIceWaitlist});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}