/**
 * Created by ahmadilaiwi on 7/9/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    path = require('path');
var user = new Schema({
    FirstName:          { type: String },
    MidName:            { type: String },
    LastName:           { type: String },
    RegisterNumber: {type:Number},
    profilePic: {type: String},
    BirthDate: {type: Date},
    Email : {type : String},
    Specialization : {type: String},
    Items: [Schema.Types.ObjectId],
    //Offers: [{
    //    ItemID:{type: Schema.Types.ObjectId},
    //    done : {type: Boolean}
    //}],
    Requests : [{
        ItemID:{type: Schema.Types.ObjectId},
        done : {type: Boolean}
    }],
    timestamp:      { type: Date, 'default': Date.now }
});
ImageSchema.virtual('FullName')
    .get(function() {
        return this.FirstName+" "+this.LastName;
    });
module.exports = mongoose.model('User', user);