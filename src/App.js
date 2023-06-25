import Card from "./Card";
import Data from "./Data";

function App() {
  const cardRender = (value,idx) => {
    return <Card key={idx} imgsrc={value.imgsrc} title={value.title} />
  }
  return (
    <>
      {Data.map(cardRender)}
    </>
  ); 
}

export default App;
