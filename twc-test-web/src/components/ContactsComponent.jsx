import React, { useEffect, useState } from 'react';
import axios from 'axios';
import male from '../assets/images/male.png';
import female from '../assets/images/female.png';
import delet from '../assets/images/delete.png';
import edit from '../assets/images/edit.png';
import ContactsDeleteMessage from '../messages/ContactsDeleteMessage'; 

const ContactsComponent = () => {
  const [contacts, setContacts] = useState([]);
  const [editedContact, setEditedContact] = useState();
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); 

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
      await axios.delete(`http://localhost:3002/contact/contacts/${email}`);
      const response = await axios.get('http://localhost:3002/contact/allContacts');
      setContacts(response.data);
      setDeleteConfirmation(null); 
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleUpdateContact = async () => {
    if (!editedContact) return;

    try {
      await axios.put(`http://localhost:3002/contact/contacts/${editedContact.email}`, editedContact);
      const response = await axios.get('http://localhost:3002/contact/allContacts');
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
      [field]: e.target.value,
    });
  };

  const showDeleteConfirmation = (contact) => {
    setDeleteConfirmation(contact);
  };

  const hideDeleteConfirmation = () => {
    setDeleteConfirmation(null);
  };

  return (
    <>
      {deleteConfirmation && (
        <ContactsDeleteMessage
          contact={deleteConfirmation}
          onCancel={hideDeleteConfirmation}
          onDelete={handleDeleteContact}
        />
      )}
      <div className='flex w-994 h-73 mt-35.43 ml-204 text-custom-501'>
        <div className='mt-0 ml-0 w-324 h-73'>
          <h1 className='font-bold text-7xl '>Contacts</h1>
        </div>
        <div className='h-48 p-1 mt-16 text-2xl font-bold text-center border rounded-full w-255 ml-415'>
          <a href="/contacts/new"><h3>Add new contact</h3></a>
        </div>
      </div>

      <div className='overflow-y-auto rounded-xl w-995 h-316 mt-23 ml-204 bg-custom-501'>
        <table className='w-full text-custom-500'>
          <thead className=''>
            <tr>
              <th className='px-4 py-2'></th>
              <th className='px-4 py-2'>Full Name</th>
              <th className='px-4 py-2'>Gender</th>
              <th className='px-4 py-2'>E-mail</th>
              <th className='px-4 py-2'>Phone number</th>
              <th className='px-4 py-2'></th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {contacts.map((contact) => (
              <tr key={contact.email}>
                <td className='w-48 h-48 '>
                  <img src={getGenderImage(contact.gender)} alt={contact.gender} />
                </td>
                <td className='px-6 py-4'>
                  {editedContact === contact ? (
                    <input type='text' value={editedContact.fullName} onChange={(e) => handleInputChange(e, 'fullName')} className='w-full' />
                  ) : (
                    <span>{contact.fullName}</span>
                  )}
                </td>
                <td className='px-4 py-2'>
                  {editedContact === contact ? (
                    <select value={editedContact.gender} onChange={(e) => handleInputChange(e, 'gender')} className='w-full'>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  ) : (
                    <span>{contact.gender}</span>
                  )}
                </td>
                <td className='px-4 py-2'>
                  {editedContact === contact ? (
                    <input type='email' value={editedContact.email} onChange={(e) => handleInputChange(e, 'email')} className='w-full' />
                  ) : (
                    <span>{contact.email}</span>
                  )}
                </td>
                <td className='px-4 py-2'>
                  {editedContact === contact ? (
                    <input type='tel' value={editedContact.phoneNumber} onChange={(e) => handleInputChange(e, 'phoneNumber')} className='w-full' />
                  ) : (
                    <span>{contact.phoneNumber}</span>
                  )}
                </td>
                <td className=''>
                  {editedContact === contact ? (
                    <button className='p-2 rounded-full bg-custom-500 text-custom-501' onClick={handleUpdateContact}>
                      Save
                    </button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(contact)}>
                        <img src={edit} alt='Edit' />
                      </button>
                      <button onClick={() => showDeleteConfirmation(contact)}>
                        <img src={delet} alt='Delete' />
                      </button>
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
};

export default ContactsComponent;

  

