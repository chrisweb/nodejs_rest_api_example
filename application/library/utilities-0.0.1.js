var imPrivate = function() {

	console.log('im private');

};

var imPublicAlias = function() {

	console.log('im public');

};

module.exports = {
	imPublic: imPublicAlias
};