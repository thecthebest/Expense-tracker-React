import './Card.css';
function Card(props) {
    // Any value set in className is added to css of this component
    const classes = 'card ' + props.className;
    // props.children is a special props built in react and recevied by every components
    return <div className={classes}>{props.children}</div>;
}

export default Card;