const AnswerIcon = ({iconClass,visible}) => {
   return <span className={iconClass} style={{display: visible ? 'inline-block' :'none'}}></span>
}

export default AnswerIcon;