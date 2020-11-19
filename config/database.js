const mongoose = require('mongoose');

const connectionURI = `mongodb+srv://admin:redwallsofDB_0@supremebreadcluster.8ulck.mongodb.net/imgurlogin?retryWrites=true&w=majority`;

const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
});

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host} : ${db.port}`);
});