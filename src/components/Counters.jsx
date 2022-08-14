import Counter from "./Counter.jsx";
import {useState} from "react";

const Counters = ({onReset, onIncrease, onDelete, counters}) => {


    return (
        <div className="container mt-5">
            <button className="btn btn-primary mb-3" onClick={onReset}>Reset</button>
            {
                counters.map(
                    counter => <Counter key={counter.id}
                                        counter={counter}
                                        onDelete={onDelete}
                                        onIncrease={onIncrease}
                    />
                )
            }
        </div>
    )
}

export default Counters;