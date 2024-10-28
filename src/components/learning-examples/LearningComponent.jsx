import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import {FifthComponent} from './FirstComponent';
import LearningJavaScript from './LearningJavaScript';


function LearningComponents() {
    return (
      <div className="App">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
        <LearningJavaScript/>
      </div>
    );
  }
  
export default LearningComponents