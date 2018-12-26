'use strict';
const alfy = require('alfy');
const stringOccurrence = require('string-occurrence');
const algoliasearch = require('algoliasearch');

const client = algoliasearch('35UOMI84K6', '632bd8009b7260d30a352e9d9b14d552');
const docIndex = client.initIndex('doc');
const linkIndex = client.initIndex('link');

// const items = data.map(api => {
// 	const url = `http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/${
// 		api.service
// 	}.html#${api.name}-property`;

// 	return {
// 		title: api.name,
// 		autocomplete: api.name,
// 		subtitle: api.serviceFullName,
// 		keywords: api.keywords,
// 		arg: url,
// 		quicklookurl: url,
// 		icon: {
// 			path: `./icons/${api.icon}.png`
// 		}
// 	};
// });

const matcher = (input, items) => {
	const tokens = input
		.trim()
		.toLowerCase()
		.split(' ');

	const result = items.filter(item => {
		item.count = stringOccurrence(item.keywords, tokens);

		return item.count > 0;
	});

	return result.sort((a, b) => b.count - a.count);
};

// alfy.output(matcher(alfy.input, items));
console.log(alfy.input);
