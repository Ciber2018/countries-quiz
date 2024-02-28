import { useEffect, useReducer } from 'react';
import './App.css';
import { createGame,getCountries } from './utils/operations';
import { initialStates,countryReducer } from './reducers/countryReducer';
import Quiz from './components/Quiz';
import Button from './components/Button';
import congrats from './resource/congrats.svg';

function App() {
  const[state,dispatch] = useReducer(countryReducer,initialStates);

  useEffect(() => {
    const getData = async () =>{
      /*fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {   
          let initialGame = createGame(data);
          dispatch({type:'NEW_GAME',game: [...initialGame]});        
         
        })
        .catch(error => {
          console.log(error)
        })*/
        let countries = await getCountries();
        let initialGame = createGame(countries);
        dispatch({type:'NEW_GAME',game: [...initialGame]}); 
    }
  
    getData();  
  }, [])

  const btnMenuHandlClick = (e) =>{   
    dispatch({type:'CURRENT_ACTIVE',active:parseInt(e.target.id)});
  }

  const updateCompleted = (isCorrect) => {
    dispatch({type:'COMPLETED',id:state.activeQuiz, isCorrect});    
  }

  const playAgain = async () => {
    let countries = await getCountries();    
    let initialGame = createGame(countries);    
    dispatch({type:'NEW_GAME',game: [...initialGame]}); 
  }

  if (state.quizCompleted.length === 10) {
    return(
      <div className='completed-quiz-container'>
        <img src={congrats} alt='CongratsImage'/>
        <div>
          <span className='child1'>Congrats! You completed the quiz.</span>
          <span className='child2'>You answer {state.correctAnswers}/10 correctly.</span>
          <Button buttonClass='btn-congrats' activeClass='bg-active' handleOnClick={playAgain} > 
              Play again                                         
          </Button>
         </div>
        
        
      </div>
    )
  }


  return (
    <>
    <div className='quiz-container'>
        <div className='quiz-text'>
            <span>Country Quiz</span>
        </div>

       <div className='btn-menu-container'>

          {
            state.game.length > 0 ?
            state.game.map((country,index) => {
              return (
                <span key={index}>
                  <Button buttonClass="btn-menu" key={index}                      
                    questionId={index}
                    btnActive={state.activeQuiz}
                    //handleOnClick={(id)=>dispatch({type:'CURRENT_ACTIVE',active:id})}   
                    handleOnClick={btnMenuHandlClick} 
                    activeClass={index === state.activeQuiz || state.quizCompleted.includes(index) ? 'bg-active' : 'bg-default'}               
                    >
                      {index + 1}
                    </Button>                    
                </span>
              ) 
         
             })
             :
             <h1 className='firstLoad'>Loading game....</h1>
          }  
   
       </div>

       {
         state.game.length > 0 &&
           <Quiz game={state.game[state.activeQuiz]} handleCompleted={(val)=>updateCompleted(val)} />
       }

              
          
      </div>
    </>
    
  );
}

export default App;
