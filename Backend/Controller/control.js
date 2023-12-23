const DataSchemaJson = require("../Model/model");

const data_json = require("../jsondata.json");

const getdata = async (req,res)=>{
      
     console.log(req.query);
     
    try {
        const Mydata = await DataSchemaJson.find(req.query);
        res.status(200).json({Mydata});
    } catch (error) {
        res.status(404).json(error);
    }
  }
  module.exports = {getdata};
  