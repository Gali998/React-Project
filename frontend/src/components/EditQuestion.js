import { Form, Button } from 'react-bootstrap';
import { QuestionContext } from '../contexts/QuestionContext';
import { useContext, useState } from 'react';

const EditQuestion = ({ assignQuestion }) => {

    const [id, setId] = useState(assignQuestion.id);
    const [question, setType] = useState(assignQuestion.question);
    const [category, setCategory] = useState(assignQuestion.category);
    const [status, setStatus] = useState(assignQuestion.status);

    const { updateQuestion } = useContext(QuestionContext);
    const { updatedQuestion } = { id, question, category, status };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateQuestion(id, updatedQuestion);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Id *"
                    name="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Question</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Question *"
                    name="question"
                    value={question}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Category *"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Status *"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Update Question
            </Button>
        </Form>
    )

}

export default EditQuestion;