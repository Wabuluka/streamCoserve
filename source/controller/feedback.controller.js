const Feedback = require('../model/feedback.model');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

// create and save feedback record into the db
exports.create = (req, res)=>{

    // create feedback
    const feedback = new Feedback({
        feedbackId: uuidv4(),
        streamlineUserId: req.body.streamlineUserId,
        dateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        message: req.body.message,
        subject: req.body.subject,
        status: req.body.status,
    });

    // ensure no empty field
    if(!req.body){
        res.status(400).send({
            message: `You left some fields empty`
        });
    }

    // save to db
    Feedback.create(feedback, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || `Something is not right`
            })
        else res.send(data)
    })
}


// get a specific feedback according to the id
exports.getById = (req, res) =>{
    Feedback.findById(req.params.feedbackId, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not Found ${req.params.feedbackId}.`
                })
            }
            else{
                res.status(500).send({
                    message: `Error retrieving ${req.params.feedbackId}.`
                })
            }
        }
        else res.status(200).send({
            data: data
        })
    })
}


exports.findAll = (req, res) => {
    Feedback.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || `Something is not right`
            })
        }
        if(data == ''){
            res.status(404).send({
                message: 'Hurraaaa! Seems like there are no more feedback to show.'
            })
        }
        else{
            res.status(200).send(data)
        }
    })
}

