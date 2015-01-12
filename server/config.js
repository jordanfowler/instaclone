/*module.exports = {
	db: 'localhost',
	clientSecret: process.env.clientSecret || 'd7acc6a868b140b694548ba4f83b8351'.
	tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};
*/
module.exports = {
  db: process.env.db || 'localhost',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
 
};