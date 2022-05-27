import React from 'react';

function Bucket(props) {

  console.log(props.bucket);

  return props.bucket.map((item) => (
    // TODO: Add a key attribute set to the id of the bucket item
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // Hint: use a ternary operator for the class
    <div className={``}>

      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div onClick={() => {}}>
          {/* TODO: Add the item text here */}
      </div>
      <div className="icons">
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => {}}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
