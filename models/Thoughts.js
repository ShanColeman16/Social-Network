const   {   Schema, model, Types   } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () = > new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true
        },
        createAt {
            type: Date,
            default: Date.now,
            get: createdAtVal => momnet(createdAtVal).format("MMM DD, YYYY [at] hh:mm"),
        },
        {
            toJSON: {
                virtuals: true,
                getters: true
            },
            id: false
        },
     }
    );   

    const ThoughtSchema = new Schema (
        {
            thoughtText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            createAt {
                type: Date,
                default: Date.now,
                get: createdAtVal => momnet(createdAtVal).format("MMM DD, YYYY [at] hh:mm"),
            },
            username: {
                type: String,
                required: true
            },
            reactions: [reactionSchema],    
            {
                toJSON: {
                    virtuals: true,
                    getters: true
                },
                id: false
            }
        };
    )

    const Thought = model('Thought', ThoughtSchema);