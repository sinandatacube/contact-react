import React from 'react'
import Contact from "../components/Contacts"

function Favourite({ favContact, deleteContact, favToggle }) {

    return (
        <>
            <div className='container my-5'>
                <div className='row-row-cols-1 row-cols-sm-2 row-cols-md-3 g-5'>
                    {favContact.filter(single => single.fav).length === 0 && <div>No contacts to show</div>}
                    {favContact.map((singleContact) => {

                        return (
                            singleContact.fav && (
                                <Contact key={singleContact.id} favToggle={favToggle} deleteContact={deleteContact} singleContact={singleContact} />
                            )
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Favourite