import React from 'react';
import { Button } from 'react-bootstrap';
import Review from './Review/Review';

const Manage = () => {
    const handleAddProduct=()=>{
        console.log('object added');
    }
    return (
        <div>
            <h1>
                <Button onClick={handleAddProduct}>Add Product</Button>
            </h1>
            <Review></Review>



        </div>
    );
};

export default Manage;