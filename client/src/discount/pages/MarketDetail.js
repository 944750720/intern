import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSuperDetail } from '../api/getList';
// import { marked } from 'marked';
// import { CategoryList } from '../components/CategoryList'


export const MarketDetail = () => {
    const initialState = {
        id: '',
        food_name: '',
        price_after_discount: '',
        discount_rate: '',
        price_before_discount: '',
        register_date: '',
    };

    const [detail, setDetail] = useState(initialState)
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        getSuperDetail(id)
        .then(d => {
            setDetail(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[id])
    
    return(
        
        <div>
            <center>
                <h1>{id}</h1>
                {loading ?
                    <h1>Loading....</h1>
                    :
                    <table className="table" border="1" width="300">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col-2">Last Update</th>
                                    <th scope="col-2">Food Name</th>
                                    <th scope="col-4">Price (after discount)</th>
                                    <th scope="col-6">Discount Rate</th>
                                    <th scope="col-6">Price (before discount)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(detail).map((value) =>
                                    <tr>
                                        <td><center>{value.register_date}</center></td>
                                        <th scope="row"><center>{value.food_name}</center></th>
                                        <td><center>¥{value.price_after_discount}</center></td>
                                        <td><center>{value.discount_rate} %</center></td>
                                        <td><center>¥{value.price_before_discount}</center></td>
                                        
                                    </tr>
                                )}
                    
                                {/* {data.map((value) =>
                                    <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{{value} ? "🚩" : " "}</td>
                                        <td>{value.name}</td>
                                        <td>{value.pv}</td>
                                    </tr>
                                )} */}
                            </tbody>
                        </table>
                        
                }
        </center>
        </div>
    )
    
}