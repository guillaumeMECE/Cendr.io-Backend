const { QuestionModel } = require('@models');
/**
 * Request structure
 * req = { params : { id : Number } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};
    if(req.params.id === undefined || req.params.id === null){
        throw new Error('Id is null or undefined');
    }
    inputs.id=req.params.id;
    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async (inputs) => {
    return QuestionModel.findOne({_id: inputs.id}).exec();
  };
  
  /**
   * LOGIC :
   */
  const readQuestion = async (req, res) => {
    try {
      const inputs = await secure(req);
  
      const param = await process(inputs);
      
      res.status(200).json(param);
    } catch (error) {
      console.log("ERROR MESSAGE :", error.message);
      console.log("ERROR :", error);
      res.status(400).json({ message: error.message });
    }
  };
  module.exports = readQuestion;