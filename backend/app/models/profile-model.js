const baseModel = require('./base-model.js');
const collection = "is-profile";

exports.get = (username) => {
	return baseModel.get(collection, {username: username});
};

exports.find = (criteria, sortBy, limit) => {
	return baseModel.find(collection, criteria, sortBy, limit);
};

exports.save = (entry) => {
	return baseModel.save(collection, entry);
};

exports.replace = (query, entry) => {
	return baseModel.replace(collection, query, entry);
};

exports.update = (query, update) => {
	return baseModel.update(collection, query, update);
};

exports.remove = (criteria) => {
	return baseModel.remove(collection, criteria);
};

exports.count = (criteria) => {
	return baseModel.count(collection, criteria);
};

exports.aggregate = (criteria) => {
	return baseModel.aggregate(collection, criteria);
};

exports.aggregateToStream = (criteria) => {
	return baseModel.aggregateToStream(collection, criteria);
};