import React from 'react'

function Contacts({ singleContact, deleteContact, favToggle }) {
    return (
        <>
            <div className='col-3 shadow rounded p-2' style={{ paddingTop: '15px', paddingBottom: '15px', border: 'solid 1px lightgrey', marginTop: '3px', marginBottom: '3px', }}>
                <div className='col'>

                    <div className='card-shadow-sm w-90'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-9'>{singleContact.name}</div>
                                <div className='col-3' onClick={() => { favToggle(singleContact.id) }}>
                                    {
                                        singleContact.fav ? <i className="bi bi-star-fill" style={{ color: 'red', borderColor: 'black' }}></i> : <i className="bi bi-star" ></i>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>{singleContact.phone}</li>
                        <li className='list-group-item'>{singleContact.email}</li>

                    </ul>
                    <div className='row'>
                        <button onClick={() => { deleteContact(singleContact.id) }}>
                            Delete</button>
                    </div>
                </div>
            </div>

            {/* <div className='col-md-3 shadow rounded px-5' style={{ paddingTop: '15px', paddingBottom: '15px', border: 'solid 1px lightgrey', marginTop: '3px', marginBottom: '3px', }}>
                <div className='row'>

                    <div className='col-md-10'></div>
                    <div className='col-md-2 '>star</div>
                </div>

                <li>
                    {singleContact.name}

                </li>
                <li>
                    {singleContact.email}

                </li>
                <li>
                    {singleContact.phone}

                </li>


            </div> */}


        </>
    )
}

export default Contacts