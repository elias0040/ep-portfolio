import '../App.css';

function LetterBox(props) {
    return (
          <div className="LetterBox" >
              <h1>{props.Character}</h1>
          </div>
    );
  }
  
export default LetterBox;