const   {   Schema, model, Types   } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema (
{ 
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdVAtVal => moment(createdVAtVal).format( "MMM DD, YYYY" ),
    },
  },
  {
    toJSON : {
      virtuals: true,
      getters: true
    },
    id: false,
  }
)
const thoughtSchema = new Schema (
{
   thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdVAtVal => moment(createdVAtVal).format( "MMM DD, YYYY" ),
  },
    },
    {
    reactions: [reactionSchema],
    },
  {
    toJSON : {
      virtuals: true,
      getters: true
    },
    id: false,
  }
)

thoughtSchema.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
})

    const Thought = model('Thought', ThoughtSchema);

    module.exports = Thought;