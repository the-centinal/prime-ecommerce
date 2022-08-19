import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

function Customers() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://assessment.api.vweb.app/users");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                console.log(filter);
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts();
    }, [])


    const Loading = () => {
        return (
            <div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </div>
        );




    };

    // const filterProduct= (cat ) => {
    //     const updatedList = data.filter((x) => x.category === cat);
    //     setFilter(updatedList);
    // }


    const ShowUsers = () => {
        return (
            <>


                {filter.map((users) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={users.user_id}>
                                    {/*<img src={product.image} class="card-img-top" alt={product.name} height="250px" />*/}
                                    <div class="card-body">
                                        <h5 className="card-title mb-0">{users.name.substring(0, 100)}</h5>
                                        <br />
                                        {/*<p className="card-text lead fw-bold">$ {product.selling_price}</p>
                    <p className="card-text lead fw-bold">Stock Left - {product.stock} </p>*/}

                    <NavLink to={`/orders/${users.user_id}`} className="btn btn-outline-dark">VIEW ORDERS</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">OUR PRODUCTS</h1>
                        <br />
                        <div className="text-center">
                        <NavLink to={`/customers`} className="btn btn-outline-dark">OUR CUSTOMERS</NavLink>
                            
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowUsers />}
                </div>
            </div>
        </div>
    )
}

export default Customers;