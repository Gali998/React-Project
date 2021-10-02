import { Form,Button } from 'react-bootstrap';
import { QuestionContext } from '../contexts/QuestionContext';
import { useContext, useState } from 'react';

const AddQuestionForm = ()=>{

    const {addQuestion} = useContext(QuestionContext);
    const [newQuestion,setNewQuestion] = useState({
        id:"",
        question:"",
        category:"",
        status:""
    });

    const onInputChange = (e) =>{
        setNewQuestion({...newQuestion,[e.target.name]:e.target.value})
    }

    const {id,question,category,status} = newQuestion;

    const handleSubmit = (e) =>{
        e.preventDefault();
        addQuestion(id,question,category,status);

    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control
                 type="number"
                 placeholder="Id *"
                 name="id"
                 value={id}
                 onChange={ (e) => onInputChange(e)}
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
                 onChange={ (e) => onInputChange(e)}
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
                 onChange={ (e) => onInputChange(e)}
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
                 onChange={ (e) => onInputChange(e)}
                 required
                />
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Add new Question
            </Button>
        </Form>
    )

}

export default AddQuestionForm;