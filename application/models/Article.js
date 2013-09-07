/**
 * 
 * Article Model
 * 
 */
var Article = {};
var Mongoose = require('Mongoose');

var Schema = Mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ArticlesSchema = new Schema({
    user: { type: ObjectId, required: true },
	title: String,
	body: String,
	date: { type: Date, default: Date.now }
},
{
	safe: true,
	wtimeout: 10000
});

// by default mongoose will create an index for you, if you want to avoid
// that mongoose checks if indexes exist on every startup, set it to false
ArticlesSchema.set('autoIndex', true);

module.exports = Mongoose.model('Article', ArticlesSchema);