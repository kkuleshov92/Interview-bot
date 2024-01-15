import { readFileSync } from 'fs';

const questions = JSON.parse(readFileSync('src/assets/questions.json', 'utf8'));

const getRandomQuestion = (topic) => {
  let questionTopic = topic.toLowerCase();

  if (questionTopic === 'случайный вопрос') {
    const keysArr = Object.keys(questions);

    questionTopic = keysArr[Math.floor(Math.random() * keysArr.length)]
  }

  const randomQuestionIndex = Math.floor(
    Math.random() * questions[questionTopic].length
  );

  return {
    question: questions[questionTopic][randomQuestionIndex],
    questionTopic,
  }
}

const getCorrectAnswer = (topic, id) => {
  const question = questions[topic].find(item => item.id === id);

  if (!question.hasOptions) {
    return question.answer;
  }

  return question.options.find(answer => answer.isCorrect).text;
}

export {
  getRandomQuestion,
  getCorrectAnswer,
}
