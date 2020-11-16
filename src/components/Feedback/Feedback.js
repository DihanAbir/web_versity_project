import React, { useEffect, useState } from 'react';

import Carousel from 'react-elastic-carousel';
import './Feedback.css';

const Feedback = () => {

    const [Feedback, setFeedback] = useState([]);
    useEffect(()=>{
       fetch('https://young-anchorage-57844.herokuapp.com/review') 
        .then(res => res.json())
        .then(data => setFeedback(data))

    }, [])

    console.log(Feedback)


    return (
        <div className="Feedback-container container mt-5 ">
            <hr className="mt-5"></hr> 
            <h1 className='margin-top'>feedback</h1>
            <h3 className="text-center text-black pt-5 my-5">Customer <span
             className="text-success">Feedbacks</span></h3>
            <Carousel itemsToShow={3} showArrows={false} enableAutoPlay={true} autoPlaySpeed={3000}  className="py-5 carousel-section">

                {Feedback.map(item => <div className="text-center p-3 carousel Feedback-carosel" key={item._id}>
                    <img className="img-fluid" src={item.photoURL} alt=""/>
                    <h5 className="text-white">{item.name}</h5>
                    <h6> {item.email}</h6>
                    <h6> {item.description}</h6>
                    <p>{item.Feedback}</p>
                </div>)
                
                }

            </Carousel>
        </div>
    );
};


export default Feedback;