const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 60000,
    autoCreate: false,
});