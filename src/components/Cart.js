import React from 'react'
import axios from 'axios'
import Product from './Product'
import Grid from '@mui/material/Grid'

export default function Cart() {
    const [data, setData] = React.useState();
    const [totalQuantity, setTotalQuantity] = React.useState(0);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [products, setProducts] = React.useState([]);

    const fetchData = async () => {
        axios.get('https://fakestoreapi.com/carts/2')
            .then(function (response) {
                setData(response?.data);
                fetchProducts(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const fetchProducts = async ({ products }) => {
        products.map((product) => {
            axios.get(`https://fakestoreapi.com/products/${product?.productId}`)
                .then(function (response) {
                    setProducts(prevState => [...prevState, response?.data]);
                    setTotalQuantity()
                    setTotalPrice(prevState => {
                        return prevState + (response?.data?.price * product.quantity);
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        data ?
            <>
                <h2>User: {data?.userId}</h2>
                <h3>Total Price: {totalPrice} </h3>

                <Grid container>
                    {products.length && products.map((product) => (
                        <Grid key={product.productId} item lg={4} md={2} sm={1}>
                            <Product data={product} />
                        </Grid>
                    ))}
                </Grid>
            </>
            : 'Loading...'
    )
}
