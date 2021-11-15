import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from './MealsItem/MealsItem';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [color] = useState('#ffffff');

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get(
                    'https://food-order-app-react-38ac4-default-rtdb.firebaseio.com/meals'
                );
                const resData = response.data;

                const loadMeals = [];

                for (const key in resData) {
                    loadMeals.push({
                        id: key,
                        name: resData[key].name,
                        description: resData[key].description,
                        price: resData[key].price,
                    });
                }

                setMeals(loadMeals);
                setLoading(false);
            } catch (error) {
                if(error.request) {
                    setError(error.message);
                    setLoading(false);
                }
            }
        };

        fetchMeals();
    }, []);

    if (loading) {
        return (
            <section className={classes.LoadingContainer}>
                <ClipLoader color={color} loading={loading} size={100} />
            </section>
        );
    }

    if (error) {
        return (
            <section className={classes.LoadingContainer}>
                <p>{`${error} try again!`}</p>
            </section>
        );
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {meals.map((meal) => (
                        <MealsItem
                            key={meal.id}
                            price={meal.price}
                            name={meal.name}
                            description={meal.description}
                            id={meal.id}
                        />
                    ))}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
