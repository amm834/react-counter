import {useState} from "react";

const Counter = ({counter, onDelete}) => {
    const [state, setState] = useState({
        count: counter.value
    })
    const formatCount = () => state.count === 0 ? <span>Zero</span> : state.count;

    return (
        <div className="mb-3">
            <span className={`bg-primary badge ${state.count <= 0 ? 'bg-danger' : ''}`}>{formatCount()}</span>
            <button
                className="btn btn-success ms-3 "
                onClick={() => {
                    setState({
                        count: state.count + 1
                    })
                }}
            >Increment
            </button>

            <button className="btn btn-danger ms-3"
                    onClick={() => onDelete(counter.id)}
            >
                Delete
            </button>
        </div>
    )
}

export default Counter;