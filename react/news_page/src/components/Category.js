import React from 'react';
import '../style/Category.scss';

const categories = [
  {
    name: 'all',
    text: 'All'
  },

  {
    name: 'business',
    text: 'Besiness'
  },

  {
    name: 'entertainment',
    text: 'Entertainmnert'
  },

  {
    name: 'health',
    text: 'Health'
  },

  {
    name: 'science',
    text: 'Science'
  },

  {
    name: 'sport',
    text: 'Sport'
  },

  {
    name: 'technology',
    text: 'Technology'
  }
];

const Category = ({ onSelect }) => {

  const cateList = categories.map((c) => (
    <li key={c.name} onClick={() => onSelect(c.name)}>{c.text}</li>
  ));

  return (
    <ul className="Category">
      {cateList}
    </ul>
  );
};

export default Category;