import Card from "./Card";
import Data from "./Data";
import Navbar from "./Navbar";

function App() {
  const cardRender = (value,idx) => {
    return <Card key={idx} imgsrc={value.imgsrc} title={value.title} />
  }
  return (
    <>
      <Navbar/>
      {Data.map(cardRender)}
    </>
  ); 
}

export default App;
