import './App.css';
import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || [];
  });
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? {...item,value} : item));
      setItemToEdit(null);
    } else {
      setItems([...items,{id: Date.now(),value}]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id  ));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  }

  return (
    <div className='App container mb-3'>
      <h1>CRUD LocalStorage</h1>
      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}/>
      <List items={items}
        deleteItem={deleteItem} editItem={editItem}/>
    </div>
  );
}

export default App;
