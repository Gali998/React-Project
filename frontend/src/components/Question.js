import {Modal,Button} from 'react-bootstrap'
import { useContext,useState,useEffect } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import EditQuestion from './EditQuestion';
import Badge from './Badge';

const Question = ({ question }) => {

    const { deleteQuestion } = useContext(QuestionContext)
    const [show,setShow] = useState(false);
    const handleShow = ()=> setShow(true);
    const handleClose = () => setShow(false);

    const questionStatus ={
        "Draft": "secondary",
        "Published": "success" 
    }

    useEffect(()=>{
        handleClose()
    }, [question])

    return (
        <>
            <td>{question.id}</td>
            <td>{question.question}</td>
            <td>{question.category}</td>
            <td><Badge type={questionStatus[question.status]} content={question.status}/></td>
            <td>
                <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteQuestion(question.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Question
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditQuestion assignQuestion={question}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Question;