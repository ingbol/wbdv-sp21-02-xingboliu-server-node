const quizSerice = require('../services/quiz-service')

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        res.send(quizSerice.findAllQuizzes())
    }
    const findQuizById = (req, res) => {
        const qid = req.params.qid
        res.send(quizSerice.findQuizById(qid))
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
}

