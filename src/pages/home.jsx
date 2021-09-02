import React from 'react';
import Navbar from '../components/navbar.jsx';
import Button from '../components/button.jsx';
import Item from '../components/item.jsx';
import List from '../components/list.jsx';
import RadioButton from '../components/radioButton.jsx';
import TextField from '../components/textField.jsx';
import DropDown from '../components/dropDown.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <br />
        Lorem Ipsum
      </div>
      <Button />
      <List />
      <RadioButton />
      <TextField />
      <DropDown />
    </div>
  );
};

export default Home;


