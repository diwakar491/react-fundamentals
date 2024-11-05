import { PropTypes } from 'prop-types';

export default function CounterButton({by, incrementMethod, decrementMethod}){

    function incrementCounterFunction(){
        incrementMethod(by);
    }

    function decrementCounterFunction(){
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
