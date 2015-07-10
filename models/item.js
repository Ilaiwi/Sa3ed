/**
 * Created by ahmadilaiwi on 7/10/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var item = new Schema({
    User_ID:   { type: ObjectId },
    title:      { type: String },
    category :  { type: String },
    Image:      {type: String },
    requests:    [{
        user: {type: Schema.Types.ObjectId},
        accepted: {type: Boolean , default: false}
    }],
    FinishTime : {type: Date},
    Finish:{type : Boolean, default:false},
    timestamp:  { type: Date, 'default': Date.now }

});

module.exports = mongoose.model('Item', item);