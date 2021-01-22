const feedback = require('../model/feedback.model');

class IndexController{

    static GetFeedback(req, res){
        const allfeedback = feedback;
        
        return res.status(200).send({
            status: 200,
            data: allfeedback
        });
    }
}

module.exports = IndexController;