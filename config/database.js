const mongoose = require ('mongoose');

const dbConnect = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI, mongoose.set('strictQuery', true),() => {
			console.log('connected to MongoDB! ');
		});
	} catch (error) {
		console.log(error.message);
	}
};


module.exports = dbConnect;
