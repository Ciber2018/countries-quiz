
const Button = ({buttonClass,activeClass = 'bg-default',questionId = 0,btnActive = 1,handleOnClick,children/*,isCompleted = []*/}) =>{
    //console.log(questionId);
    //console.log(btnActive);
    return  <button className={`${buttonClass} ${activeClass/*questionId === btnActive || isCompleted.includes(btnActive) ? 'bg-active' : 'bg-default'*/}`}                   
                   id={questionId}                  
                   //onClick={(e)=> handleOnClick(questionId)}
                   onClick={handleOnClick}
                   >{children}
            </button>                  
          
}

export default Button;
