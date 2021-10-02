import { Modal, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import AddQuestionForm from "./AddQuestionForm";
import Question from "./Question";
import Paginations from "./Pagination";
import Footer from './Footer';

const QuestionList = () => {

    const { questions } = useContext(QuestionContext);
    const [searchStatus, setSearch] = useState("");

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [questions])

    return (
        <>
          <div className="container">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h4>FAQ Manager-iLabs</h4>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-light" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Question</span></Button>
                    </div>
                </div>
            </div>

            <div className="ui search">
                <div className="ui icon input">
                    <input type="text"
                        placeholder="Search..."
                        className="form-control"
                        style={{ marginTop: 50, marginBottom: 20, width: "100%" }}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
            </div>

            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // questions.sort((draft,published)=>(draft.status < published.status ? -1:1)).map(question =>(
                        questions.filter(val => {
                            if (searchStatus === "") {
                                return val;
                            } else if (
                                val.status.toLowerCase().includes(searchStatus.toLowerCase())
                            ) {
                                return val;
                            }
                        }).map(question => (
                            <tr key={question.id}>
                                <Question question={question} />
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Paginations />
            <Footer/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Question
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddQuestionForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        </>
    )
}

export default QuestionList;