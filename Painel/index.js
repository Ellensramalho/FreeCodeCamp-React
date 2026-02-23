export function MoodBoardItem({ color, image, description }) {
  return (
    <div
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
    <img className = "mood-board-image" src = {image} />
    <h3 className = "mood-board-text">{description}</h3>
     </div>
  );
}

export function MoodBoard(){
  return(
    <div className = "mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
    <MoodBoardItem
    color="#FFD8B1"
    image= "https://images.ctfassets.net/szez98lehkfm/6OkCyxzlp2wr18yjh1RG69/d2b9171d0fc51c15bc81d65e95f9fd66/MyIC_Inline_44351"
    description= "Aurora boreal"
    />
    <MoodBoardItem
    color="#BAE6FD"
    image= "https://www.blueopera.com.br/wp-content/uploads/2013/09/15-fenomenos-naturais-inacreditaveis-6.jpg"
    description= "Bioluminescência"
    />
    <MoodBoardItem
    color="#FBCFE8"
    image="https://services.meteored.com/img/article/iridescenza-1767957735425_512.jpg"
    description="Iridescência atmosférica"
    />
    </div>
    )
  }