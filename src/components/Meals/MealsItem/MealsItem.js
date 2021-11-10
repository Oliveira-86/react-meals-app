import { useContext } from 'react';
import classes from './MealsItem.module.css';
import MealsItemForm from './MealsItemForm';
import CartContext from '../../../store/cart-context';

const MealsItem = (props) => {
    const cartCtx = useContext(CartContext);
    const priceFixed = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.name,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{priceFixed}</div>
            </div>
            <div>
                <MealsItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealsItem;
