import { useState } from "react";
import Button from "./Button";
import AnswerIcon from "./AnswerIcon";

const Quiz = ({game,handleCompleted}) => {    
   const [show,setShow] = useState([]);       

   const ansSelectedHandleClick = (e) => {        
        if (e.target.id === game.correctAns) {            
            setShow([...show,e.target.id]);
            handleCompleted(true);
                       
        }
        else{           
            setShow([...show,e.target.id,game.correctAns]); 
            handleCompleted(false);                      
        }       
   }

    return (
        <div className="question-panel"> 
                     
            <h4 className="question">{game.question}</h4>
            
            <div className="quiz-btn-wrapper">              
                {    
                                  
                   game.choices.map((ans,index) => {                        
                       return <span key={index}><Button questionId={ans} buttonClass='btn-quiz' handleOnClick={ansSelectedHandleClick}> 
                                         {ans === undefined || ans === '' ? 'NONE' : ans} 
                                         <AnswerIcon iconClass={game.correctAns === ans ? 'right-ans' : 'wrong-ans'} visible={show.includes(ans) ? true : false} />
                                         </Button>
                              </span>
                      
                    })
                }                            
            </div>
         
        </div>
    )

}

export default Quiz;