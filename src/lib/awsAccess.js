import AWS from 'aws-sdk'

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    Bucket: process.env.S3_BUCKET_NAME
})

export async function getObject(key) {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    }

    return new Promise((resolve, reject) => {
        s3.getObject(params, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}