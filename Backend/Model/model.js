const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
    {
        end_year:{
            type:Number
        },
        intensity:{
            type:Number
        },
        sector:{
            type:String
        },
        topic:{
            type:String
        },
        insight:{
            type:String
        },
        url:{
            type:String,
            unique:true
        },
        region:{
            type:String
        },
        start_year:{
            type:String
        },
        impact:{
            type:String
        },
        added:{
            type:String
        },
        published:{
            type:String
        },
        country:{
            type:String
        },
        relevance:{
            type:Number
        },
        pestle:{
            type:String
        },
        source:{
            type:String
        },
        title:{
            type:String
        },
        likelihood:{
            type:String
        },

    }
)

const DataSchemaJson = new mongoose.model("DataSchemaJson",DataSchema);
module.exports = DataSchemaJson;