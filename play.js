const { IP, PORT } = require("./constants");

const {connect} = require("./client");
// connect();

const {setupInput} = require("./input");
// setupInput();

const connection = connect();
setupInput(connection);