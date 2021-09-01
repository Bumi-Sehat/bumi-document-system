import React from 'react';
import Navbar from '../components/navbar.jsx';
import Button from '../components/button.jsx';
import Item from '../components/item.jsx';
import List from '../components/list.jsx';
import RadioButton from '../components/radio_button.jsx';
import TextField from '../components/text_field.jsx';
import DropDown from '../components/drop_down.jsx';

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


