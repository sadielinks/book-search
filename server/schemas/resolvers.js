// require feature from apollo package
const { AuthenticationError } = require('apollo-server-express');
// User model
const { User } = require('../models');
// require auth middleware
const { signToken } = require('../utils/auth');

