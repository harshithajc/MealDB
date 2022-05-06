
import { Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function NewHome() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            console.log(response.data.categories)
            setdata(response.data.categories)
            console.log(data);
        } catch (error) {
            console.log("juhu");
        }
    }
    return (
        <div style={{backgroundColor:"#a39a83"}}>
            {data.map((datas) => {
                return <div className='col-3 p-2  ' style={{ display: "inline-block", marginLeft:"150px"}}>
                    <Card sx={{ maxWidth: 450 }}>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                height="200"
                                image={datas.strCategoryThumb}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant='h4'>
                                    {datas.strCategory}
                                </Typography>

                            </CardContent>

                        </CardActionArea>

                    </Card>
                </div>

            })}
        </div>
    )
}

export default NewHome