import React from 'react';
import Input from '../../UI/Input';
import classes from './MealsItemForm.module.css';

const MealsItemForm = () => {
    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input="amount"
                id="amount"
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealsItemForm;
