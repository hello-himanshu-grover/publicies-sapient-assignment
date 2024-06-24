import React from 'react'
import axios from 'axios'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Product({ data }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={data?.image}
                title={data?.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data?.description}
                </Typography>
                <Box mt={2}>
                    <Typography variant="body1">
                        {data?.price}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small">-</Button>
                {/* <span>quantity: {quantity}</span> */}
                <Button size="small">+</Button>
            </CardActions>
        </Card>
    )
}
