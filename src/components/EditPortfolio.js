import React from 'react';

const EditPortfolio = (props) => {
  return (
    <div>
      <h1>A Thing I have done</h1>
      <p>
        This page if for the item with id of {props.match.params.id}.
      </p>
    </div>
  );
};

export default EditPortfolio;