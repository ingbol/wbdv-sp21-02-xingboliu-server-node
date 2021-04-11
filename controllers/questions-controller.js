const questionService = require('../services/questions-service')

module.exports = (app) => {
    const findQuestionForQuiz = (req, res) => {
        const quizId = req.params.qid
        res.send(questionService.findQuestionForQuiz(quizId))
    }

    app.get('/api/quizzes/:qid/questions', findQuestionForQuiz)
}