import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from '@mui/material';



function Reci() {
    const [Reci, setReci] = useState([])

    useEffect(() => {
        fetchReci()
    }, [])

    const fetchReci = async () => {
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
            console.log(res.data.meals);
            setReci(res.data.meals)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div style={{ backgroundColor: "#a39a83" }}>
            {Reci.map((recipe) => {
                return <Card sx={{ maxWidth: 1500 }} className='ima'>
                    <CardActionArea>
                        <div>
                            <CardMedia

                                component="img"
                                height="400"
                                image="https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/teriyaki-chicken-8201w.jpg"

                            />
                        </div>
                        <CardContent>
                            <Typography variant='h2'>
                                Category-{recipe.strCategory}
                            </Typography>

                            <Typography variant='h3'>
                                Dish-{recipe.strMeal}
                            </Typography>

                            <Typography variant='h4'>
                                <br />
                                <p>Ingrediants</p>

                                {recipe.strIngredient1}
                            </Typography>

                            <Typography variant='h4'>
                                {recipe.strInstructions}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
            })}
        </div>
    )
}

export default Reci