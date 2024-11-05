import { PropTypes } from 'prop-types';

export default function CounterButton({by, incrementMethod, decrementMethod}){

    // function incrementCounterFunction(){
    //     incrementMethod(by);
    // }

    // function decrementCounterFunction(){
    //     decrementMethod(by);
    // }

    return(
        <div className="Counter">

            <div>
            <button className="counterButton" 
                    onClick={() => incrementMethod(by)}
            >+{by}</button>

            <button className="counterButton" 
                    onClick={() => decrementMethod(by)}
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
