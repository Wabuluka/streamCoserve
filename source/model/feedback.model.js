const sql = require('./db');
// constructor
const FeedbackModel = function(feedback){
    this.feedbackId = feedback.feedbackId;
    this.streamlineUserId = feedback.streamlineUserId;
    this.dateTime = feedback.dateTime;
    this.message = feedback.message;
    this.subject = feedback.subject;
    this.status = feedback.status;
}

FeedbackModel.create = (newFeedback, result) =>{
    sql.query(`INSERT INTO feedback SET ?`, newFeedback, (err, res) => {
        if(err){
            console.log(`Error`, err);
            result(err, null);
            return;
        }
        result(null, {message: `Use the code below for reference to your feedback`,  code: newFeedback.feedbackId})
    });
};


FeedbackModel.findById = (feedbackId, result) => {
    sql.query(`SELECT * FROM feedback WHERE feedbackid = '${feedbackId}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Found Feedback: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found feedback with the id
        result({ kind: "not_found" }, null);
    })
}

FeedbackModel.getAll = result => {
    sql.query(`SELECT * FROM feedback`, (err, res) => {
        if(err){
            console.log("Error", err)
            result(null, err)
            return;
        }
        result(null, res);
    })
}


module.exports =  FeedbackModel;
