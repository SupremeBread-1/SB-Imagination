const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    section : {
        type : String,
        enum : ['hot', 'top', 'user'],
        default : 'hot'
    },
    sort : {
        type : String,
        enum : ['viral', 'top', 'time', 'rising'],
        default : 'viral'
    },
    // window : {
    //     type : String,
    //     if (section === top) {
    //      enum : day, week, month, year, all,
    //      default : day  
    //     } else {
    //         enum : null
    //     }
    // }
    page : {
        type : Number,
        default : 1
    }
}, { timestamps : true });

module.exports = mongoose.model('Gallery', gallerySchema);