const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
    moviename: { required: true, type: String },
    movienamevn: { type: String },
    trailerlink: { type: String },
    movielink: { require: true, type: String },
    imagelink: { require: true, type: String },
    imagebackgroundlink: { require: true, type: String },
    description: { type: String },
    timeduration: { type: String },
    year: { type: String },
    director : {type: String },
    createdate: { type: String },
    actors: { type: Array },
    national: {
        type: String,
        enum: ['Mỹ', 'Hàn Quốc', 'Anh', 'Pháp', 'Canada', 'Hồng Kông', 'Nhật Bản', 'Trung Quốc', 'Đức', 'Úc', 'Ý', 'Thụy Điển', 'Bỉ', 'Tây Ban Nha', 'Việt Nam', 'Châu Á', 'Châu Âu', 'Philippines', 'Nga', 'Tây Ban Nha', 'Đan Mạch', 'Singapore', 'Hà Lan', 'Khác'],
        default: "Khác"
    },
    typemovie: {
        type: [String],
        enum: ['Âm Nhạc', 'Bí Ẩn', 'Chiến Tranh', 'Chính Kịch', 'Gia Đình', 'Giật Gân', 'Hài', 'Hành Động', 'Hoạt Hình', 'Kinh Dị', 'Kỳ Ảo', 'Lãng Mạn', 'Lịch Sử', 'Nói Chuyện', 'Tài Liệu', 'Thực Tế', 'Tội Phạm', 'Trẻ Em', 'Viễn Tưởng', 'Khác'],
        default: ["Khác"]
    },
    rateage:{ 
        type: String,
        default: "G"
    }
})

module.exports = mongoose.model('movie', movieSchema)