
function App() {
  const cards = [
    {header: "title1", body: "body1", footer: "subscript1", isFooter: false},
    {header: "title2", body: "body2", footer: "subscript2"},
    {header: "title3", body: "body3", footer: "subscript3"},
    {header: "title4", body: "body4", footer: "subscript4", isFooter: false},
  ]
  return (
    <div className="cardBody" style={{display: "flex", gap: "20px"}}>
    {
      cards.map((card)=>{
        console.log('here')
          return (
          <div className="card" style={{display: "flex", gap: "10px", border: "2px solid black", flexDirection: "column"}}>
            <div>{card.header}</div>
            <div>{card.body}</div>
            {card.isFooter === false ? "": card.footer}
          </div>
        )
      })
    }
    </div>
  );
}


export default App;



/* 
  {} -> return thigs -> 

  () -> automatically returns a single statement for you
(
  <div>
    <div>
    </div> *100
    section 
  </div>
  )
*/
