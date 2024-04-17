import React, { useEffect, useState } from 'react';
import axios from 'axios';
import male from '../assets/images/male.png'
import female from '../assets/images/female.png'


const ContactsComponent = () => {
    const [contacts, setContacts] = useState([]);
    const [editedContact, setEditedContact] = useState();
  
    useEffect(() => {
      const fetchContacts = async () => {
        try {
          const response = await axios.get('http://localhost:3002/Contact/allContacts');
          setContacts(response.data);
        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
      };
  
      fetchContacts();
    }, []);
  
    const getGenderImage = (gender) => {
        if (gender === 'male') {
          return male; 
        } else if (gender === 'female') {
          return female; 
        } else {
          return 'default-image-url'; 
        }
      };
  
      const handleDeleteContact = async (email) => {
        try {
          await axios.delete(`http://localhost:3002/Contact/contacts/${email}`);
          const response = await axios.get('http://localhost:3002/Contact/allContacts');
          setContacts(response.data);
        } catch (error) {
          console.error('Error deleting contact:', error);
        }
      };
      
  
    const handleUpdateContact = async () => {
      if (!editedContact) return;
  
      try {
        await axios.put(`http://localhost:3002/Contact/contacts/${editedContact.email}`, editedContact);
        const response = await axios.get('http://localhost:3002/Contact/allContacts');
        setContacts(response.data);
        setEditedContact(null);
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    };
  
    const handleEdit = (contact) => {
      setEditedContact(contact);
    };
  
    const handleInputChange = (e, field) => {
      setEditedContact({
        ...editedContact,
        [field]: e.target.value
      });
    };
  
    return (
      <>
        <div className='flex w-994 h-73 mt-35.43 ml-204 text-custom-501'>
        <div className='mt-0 ml-0 border w-324 h-73'>
          <h1>Contacts</h1>
        </div>
        <div className='h-48 p-10 mt-16 text-center border rounded-full w-255 ml-415'>
          <h3>Add new contact</h3>
        </div>
      </div>
  
        <div className='rounded-xl w-995 h-316 mt-23 ml-204 bg-custom-501'>
          <table>
          <thead className="mt-12 bg-slate-500 w-735 h-50 ml-140">
            <tr>
              <th scope="col"></th>
              <th scope="col">Full Name</th>
              <th scope="col">Gender</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone number</th>
              <th scope="col"></th>
            </tr>
          </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact.email}>
                  <td><img src={getGenderImage(contact.gender)} alt={contact.gender} /></td>
                  <td>
                    {editedContact === contact ? (
                      <input type="text" value={editedContact.fullName} onChange={(e) => handleInputChange(e, 'fullName')} />
                    ) : contact.fullName}
                  </td>
                  <td>
                    {editedContact === contact ? (
                      <select value={editedContact.gender} onChange={(e) => handleInputChange(e, 'gender')}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    ) : contact.gender}
                  </td>
                  <td>
                    {editedContact === contact ? (
                      <input type="email" value={editedContact.email} onChange={(e) => handleInputChange(e, 'email')} />
                    ) : contact.email}
                  </td>
                  <td>
                    {editedContact === contact ? (
                      <input type="tel" value={editedContact.phoneNumber} onChange={(e) => handleInputChange(e, 'phoneNumber')} />
                    ) : contact.phoneNumber}
                  </td>
                    <td>
                        {editedContact === contact ? (
                            <button onClick={handleUpdateContact}>Save</button>
                            ) : (
                                <>
                                    <button onClick={() => handleEdit(contact)}>Edit</button>
                                    <button onClick={() => handleDeleteContact(contact.email)}>Delete</button>
                                </>
                        )}
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  export default ContactsComponent;
  

