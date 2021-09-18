const AWS = require('aws-sdk');

const s3Object = new AWS.S3({
    accessKeyId : "AKIAUOTEHCQLKSXRY7N4",
    secretAccessKey : "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",
});
module.exports = async function(image)  {
    const date = new Date()
    const name = image.name
    const params = {
        Bucket: "mybucketshine",
        Key: name, // File name you want to save as in S3
        Body: image.data
    };
    const putObjectWrapper = (params) => {
        return new Promise((resolve, reject) => {
          s3Object.upload(params, function (err, data) {
            if(err) reject(err);
            if(data) resolve(data);
          });
        })
    }
    const data = await putObjectWrapper(params);
    return data.Location
    // await image.mv(path.resolve('public/image', name), function (err) {
        
    // })
    // return "/image/"+name
}