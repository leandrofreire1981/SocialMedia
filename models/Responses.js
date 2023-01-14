const { Schema, model, default: mongoose } = require("mongoose")

const responsesSchema = new Schema({
        commentarie: {
            type: String
        },
        responses:[]
})

export const Responses = model("Responses", responsesSchema);





