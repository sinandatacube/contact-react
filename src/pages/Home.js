import Contacts from "../components/Contacts"
import FillForm from "../components/FillForm"


function Home({ formSubb, contacts, deleteContact, favToggle }) {
    // console.log(contacts);
    return (
        <>
            <div>


            </div>
            <div className="row" >
                <FillForm formSubc={formSubb} />

            </div>
            <div className="row col-12"
                style={{ padding: '15px' }}
            >

                {contacts.map((singleContact) => {

                    return <Contacts key={singleContact.id} singleContact={singleContact} deleteContact={deleteContact} favToggle={favToggle} />

                })}

                {
                    contacts.length === 0 && <div>No contacts to show</div>
                }
            </div>

        </>
    )
}

export default Home