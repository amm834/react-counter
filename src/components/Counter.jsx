import {useState} from "react";

const Counter = ({value, onDelete}) => {
    const [state, setState] = useState({
        count: value,
    });

    const formatCount = () => state.count === 0 ? <span>Zero</span> : state.count;

    return (
        <div className="mb-3">
            <span className={`bg-primary badge ${state.count === 0 ? 'bg-danger' : ''}`}>{formatCount()}</span>
            <button
                onClick={onDelete}
                className="btn btn-success ms-3 ">Increment
            </button>
        </div>
    )
}

export default Counter;