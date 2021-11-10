import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input}>{props.label}</label>
            <input ref={ref} {...props} />
        </div>
    );
});

export default Input;
