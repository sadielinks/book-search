// require feature from apollo package
const { AuthenticationError } = require('apollo-server-express');
// User model
const { User } = require('../models');
// require auth middleware
const { signToken } = require('../utils/auth');

// 
const resolvers = {
    Query: {
        // 'me' = user
        me: async (parent, args, context) => {
            if (context.user) {
                // ripped from TA :)
                const userData = await User.findOne({ _id: context.user._id }).select("-__v -password");
                return userData;
            }
            throw new AuthenticationError('Please log into the application :)');
        }
    }

}