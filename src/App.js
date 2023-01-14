import './App.css';
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Notfound from './pages/Notfound';
import Naigation from './components/Naigation';
import { useState } from 'react';





function App() {

  const [contacts, setContacts] = useState([]);
  const formSuba = async (data) => {


    try {
      const res = await fetch('https://employee-management-usz2.onrender.com/empl/save_contact', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "id": data.id,
          "name": data.name,
          "phone": data.phone,
          "fav": data.fav,
          "email": data.email
        })
      })
      console.log(res.status)
      // fetch.post('https://employee-management-usz2.onrender.com/empl/save_contact', {
      //         "id":data.id,
      //         "name":data.name,
      //         "phone":data.phone,
      //         "fav":data.fav,
      //         "email":data.email
      //       });
      if (res.status === 201) {
        alert('Contact added successfully');
      }
    } catch (error) {
      console.log(error);
      alert('Error adding contact');
    }
    setContacts([...contacts, data]);
    // console.log(contacts);
  };



  const deleteContact = async (id) => {

    try {
      const res = await fetch('https://employee-management-usz2.onrender.com/empl/delete_contact', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "id": id })

      })

      console.log(res.status)
      console.log(res.body)
      console.log(id)
      if (res.status === 200) {
        alert('Contact deleted successfully');
      }
    } catch (error) {
      console.log(error);
      alert('Error adding contact');
    }

    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    })
    setContacts(newContact);
  }

  const favToggle = (id) => {
    let UpdatedContact = contacts.map((singleContact) => {


      return singleContact.id === id ? { ...singleContact, fav: !singleContact.fav } : singleContact;
    })
    console.log(UpdatedContact)
    setContacts(UpdatedContact);
  }
  return (
    <>
      {/* wrap with all tags with router */}
      <Router>
        <Naigation />

        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/favourite'>Favourit</Link></li>
        </ul> */}
        {/* inside routes we declare the route  */}

        <Routes>
          <Route exact path='/' element={<Home formSubb={formSuba} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
          <Route path='/favourite' element={<Favourite favContact={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
          <Route path='*' element={<Notfound />} />

        </Routes>


      </Router>
    </>
  );
}


export default App;
