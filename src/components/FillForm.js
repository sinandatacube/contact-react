import React from 'react'
import { useForm } from "react-hook-form";
function FillForm({ formSubc }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        data.id = Date.now();
        data.fav = false;
        formSubc(data);


    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className='col-sm-3 shadow rounded px-5' >
                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: "20px" }} >Add Contact</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group" >
                            <label htmlFor="exampleInputEmail1" style={{ padding: `5px` }}  >Name:</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  {...register('name', { required: 'Name is Required' })} />
                            {errors.name && <small className='text-danger'>{errors.name.message}</small>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{ padding: `5px` }} >Email:</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" {...register('email', { required: 'Email is Required', pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, message: 'invalid email' } })} />
                            {errors.email && <small className='text-danger'>{errors.email.message}</small>}

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{ padding: `5px` }} >Phone:</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" {...register('phone', { required: 'Phone is Required', pattern: { value: /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/, message: 'invalid phone' } })} />
                            {errors.phone && <small className='text-danger'>{errors.phone.message}</small>}

                        </div>
                        {/* <div style={{ display: 'flex', justifyContent: 'center', margin: `11px` }} > */}
                        <button type="submit" className="btn btn-primary my-3" style={{}} value='Add Contact'>Add Contact</button>
                        {/* </div> */}
                    </form>

                    {/* <div className='alert alert-danger' role="alert">Plz enter valid data</div> */}

                </div>
            </div>
        </>
    )
}

export default FillForm