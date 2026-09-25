const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
	// Prefer a full connection string if provided (simplest option).
	if (process.env.MONGO_URI) {
		return mongoose.connect(process.env.MONGO_URI);
	}

	// Otherwise build it from separate pieces, with the cluster address
	// also coming from .env instead of being hardcoded.
	return mongoose.connect(
		`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}/tanishq`
	);
};

module.exports = connect;