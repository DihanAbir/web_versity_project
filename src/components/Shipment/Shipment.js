import React from 'react';
import { useForm } from 'react-hook-form';
import "./Shipment.css"

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); 
    function shoot() {
      alert("Great Shot!");
    }
  
    return (
      
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <input name="example" defaultValue="test" ref={register} /> <br/>
        <input name="example" placeholder="Enter your Name" ref={register} /> <br/>
        <input name="example" placeholder="Address" ref={register} /> <br/>
        
        <input name="exampleRequired" ref={register({ required: true })} /> <br/>
        
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input className="btn btn-success" type="submit" onClick={shoot} />
      </form>
    );
  }

export default Shipment;