import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input}>{props.label}</label>
            <input {...props} />
        </div>
    );
};

export default Input;
