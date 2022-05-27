import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {

    // TODO: Write logic to add the new bucket item to the bucket state variable
    
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function


    // TODO: Update the bucket state variable
  };

    // Function to mark bucket item as completed
    const completeBucketItem = id => {
      // TODO: Write logic that will find the item with a matching id and set the isComplete property to `true`

      // TODO: update the bucket state variable
    }

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        removeBucketItem={removeBucketItem}
        completeBucketItem={completeBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
