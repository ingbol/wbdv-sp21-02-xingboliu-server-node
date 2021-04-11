const questions = require('./questions.json')

const findQuestionForQuiz = (quizId) => {
    return questions.filter((question) => {
        return question.quizId === quizId
    } )
}

module.exports = {
    findQuestionForQuiz
}