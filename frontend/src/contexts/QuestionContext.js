import { useState, createContext } from 'react';
export const QuestionContext = createContext()

const QuestionContextProvider = (props) => {

    const [questions, setQuestion] = useState([
        { id: 1, question: 'what is the vision of ilabs ?', category: 'About company', status: 'Published' },
        { id: 2, question: 'what is the mission of ilabs ?', category: 'About company', status: 'Published' },
        { id: 3, question: 'when iLabs get established ?', category: 'About company', status: 'Draft' },

    ])

    const addQuestion = (id, question, category, status) => {
        setQuestion([...questions, { id, question, category, status }])
    }

    const deleteQuestion = (id) => {
        setQuestion(questions.filter(question => question.id !== id))
    }

    const updateQuestion = (id, updatedQuestion) => {
        setQuestion(questions.map((question) => question.id === id ? updatedQuestion : question))
    }

    const searchQuestion = (status) => {
        setQuestion(questions.filter(question => question.status !== status))
    }
    return (
        <QuestionContext.Provider value={{ questions, addQuestion, deleteQuestion, updateQuestion, searchQuestion }}>
            {props.children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider;