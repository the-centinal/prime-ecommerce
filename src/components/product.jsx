
import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router'
import { FaStar } from 'react-icons/fa' 

function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
            // return () => {
            //     componentMounted = false
            // }
        };
        getProducts();

    }, [id]);


    const Loading = () => {
        return (
            <div>
                <div className="col-md-6">
                <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton height={50} width={300} />
                <Skeleton height={75}  />
                <Skeleton height={250} width={150} />
                <Skeleton height={50}  />
                <Skeleton height={150}  />
                <Skeleton height={50} width={100} />
                <Skeleton height={50} width={100} />
                </div>
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />

                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i><FaStar /></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p className="lead">{product.description}</p>
                  
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product