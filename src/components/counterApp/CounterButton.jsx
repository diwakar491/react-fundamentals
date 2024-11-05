import { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function CounterButton({by, incrementMethod, decrementMethod}){

    const [count, setCount] = useState(0); // deconstructing the array

    function incrementCounterFunction(){
        setCount(count + by);
        incrementMethod(by);
    }

    function decrementCounterFunction(){
        setCount(count - by);
        decrementMethod(by);
    }

    return(
        <div className="Counter">
                        
            <div>
            <button className="counterButton" 
                    onClick={incrementCounterFunction}
            >+{by}</button>

            <button className="counterButton" 
                    onClick={decrementCounterFunction}
            >-{by}</button>
            </div>
        </div>
    )
}

//Defined constraints on type of a property
CounterButton.propTypes = {
    by : PropTypes.number
}

//Set default values for the property
CounterButton.defaultProps = {
    by : 1
}
