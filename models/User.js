const { Schema, model}  =require('mongoose');
const userSchema =  new Schema(

    {
        username:{
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email:{
            type: String,
            unique: true,
            required: true,
            trim: true
            match:[ /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$, 'Please enter a valid email address' ],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            }
        ],
        friends:    [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {
        toJSON: {
           virtuals: true,
           getters: true 
        },
        id: false
    }
);