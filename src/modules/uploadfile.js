const path = require("path")
module.exports = async function(image)  {
    const date = new Date()
    const name = date.getTime() + image.name
    await image.mv(path.resolve('public/image', name), function (err) {
        
    })
    return "/image/"+name
}