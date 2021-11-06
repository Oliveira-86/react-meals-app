import classes from './MealsItem.module.css';
import MealsItemForm from './MealsItemForm';

const MealsItem = ({ name, price, description }) => {
    const priceFixed = `$${price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceFixed}</div>
            </div>
            <div>
                <MealsItemForm />
            </div>
        </li>
    );
};

export default MealsItem;
