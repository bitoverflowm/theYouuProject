import { Readable } from "stream";
import { getObject } from "@/lib/awsAccess";

export default async function handler(req, res) {
    const { key } = req.query;

    try {
        const object = await getObject(key);
        const { Body, ContentType, ContentLength } = object;

        res.setHeader("Content-Type", ContentType);
        res.setHeader("Content-Length", ContentLength);

        // convert the object data to a redable stream
        const readable = new Readable();
        readable._read = () => {};
        readable.push(Body);
        readable.push(null);

        // Pipe the readable stream to the response
        readable.pipe(res);
        //res.send(object.Body);
    } catch (error) {
        console.log("Error fetching video object from S3: ", error);
        res.status(500).json({ error: "Failed to fetch video object" });
    }
}