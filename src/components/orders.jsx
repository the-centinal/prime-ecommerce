import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router'
// import { FaStar } from 'react-icons/fa' 


function Orders() {

    const { user_id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://assessment.api.vweb.app/orders");
            setProduct(await response.json());
            setLoading(false)
            console.log(product);
            return () => {
                componentMounted = false
            }
        };
        getProducts();

    }, []);


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
                
                <table className="table table-striped">
                <thead>
                <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Product ID</th>
                <th scope="col">Qunatity</th>
                <th scope="col">Order Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">{product.order_id}</th>
                <td>{product.product_id}</td>
                <td>{product.quantity}</td>
                <td>{product.order_date}</td>
                </tr>
                
                </tbody>
                </table>
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

export default Orders