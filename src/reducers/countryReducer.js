export const initialStates = {
    currentQuiz : [],
    activeQuiz : 0,
    quizCompleted : [],
    correctAnswers: 0,
    //correctCountry: {},
    answersList: [],
    game:[]
}

export const countryReducer = (state,action) => {    
    switch (action.type) {
        case 'NEW_GAME':
            return {...initialStates,game: action.game,quizCompleted: [],correctAnswers:state.correctAnswers};

        case 'CURRENT_ACTIVE':  
            return {...initialStates,currentQuiz: state.currentQuiz,game:state.game,activeQuiz:action.active,quizCompleted: state.quizCompleted,correctAnswers:state.correctAnswers}; 

        case 'COMPLETED':  
            let updateCorrectAns = state.correctAnswers;
            if (!state.quizCompleted.includes(action.id)) {
               updateCorrectAns = action.isCorrect ? state.correctAnswers + 1 : state.correctAnswers;
            }            
            let completed = state.quizCompleted.includes(action.id) ? [...state.quizCompleted] : [...state.quizCompleted,action.id];
            return {...initialStates,currentQuiz: state.currentQuiz,game:state.game,activeQuiz:state.activeQuiz,quizCompleted: completed,correctAnswers:updateCorrectAns};      
    
        default:
            return initialStates;            
    }
}