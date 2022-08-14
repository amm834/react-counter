
const Counter = ({counter, onDelete, onIncrease}) => {

    const formatCount = () => counter.value === 0 ? <span>Zero</span> : counter.value;

    return (
        <div className="mb-3">
            <span className={`bg-primary badge ${counter.value <= 0 ? 'bg-danger' : ''}`}>{formatCount()}</span>
            <button
                className="btn btn-success ms-3 "
                onClick={() => onIncrease(counter)}
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