import { useState } from "react";

const Paginations = () => {

    const pages = 3;

    const noOfPages = [];

    for (let i = 1; i <= pages; i++) {
        noOfPages.push(i);
    }

    const [currentState, setCurrentState] = useState(1);

    return (
        <div className="clearfix">
            <div className="hint-text">Rows per page <b>5</b></div>
            <ul className="pagination">
                <li className="page-item "><a href="#" className="page-link">1-3 of 3</a></li>
                <li className="`${currentState === 1 ? 'page-item disabled' : 'page-item' }`"><a href="#" className="page-link"
                    onClick={() => setCurrentState((prev) => prev === 1 ? prev : prev - 1)}
                >❮</a></li>
                {
                    noOfPages.map((page, index) => {
                        return (
                            <li key={index} className="`${currentState === noOfPages.length ? 'page-item disabled' : 'page-item' }`"><a href="#" className="page-link"
                                onClick={() => setCurrentState(page)}
                            >{page}</a></li>
                        )
                    })
                }
                <li className="`${currentState === page ? 'page-item active' : 'page-item' }` "><a href="#" className="page-link"
                    onClick={() => setCurrentState((next) => next === noOfPages.length ? next : next + 1)}
                >❯</a></li>

            </ul>
        </div>
    )

}

export default Paginations;
