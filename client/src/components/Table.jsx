import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Item from './Item.jsx'

const Table = () => {

  // useEffect(
  //   axios.get()
  // , []);

  const onEdit = (e) => {
    e.preventDefault();
  }

  const onDelete = (e) => {
    e.preventDefault();
  }

  const onAdd = (e) => {
    e.preventDefault();
  }

  return (
    <></>
  );
};

export default Table;