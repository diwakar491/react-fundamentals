import './App.css';
import Counter from './components/counterApp/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

//legacy way
// function PlayingWithProps(properties){
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
//   return(
//     <div>PlayingWithProps</div>
//   )
// }

//modern way
// function PlayingWithProps({property1, property2}){
//   console.log(property1)
//   console.log(property2)
//   return(
//     <div>Props</div>
//   )
// }

export default App;
