module.exports = app => {
    const feedbackroute = require('../controller/feedback.controller')

    app.get('/api/v1/feedback/all', feedbackroute.findAll)
    app.get('/api/v1/feedback/:feedbackId', feedbackroute.getById)
    app.post('/api/v1/feedback/create', feedbackroute.create)
}




 