

import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';


 AWS.config.update({
  region: 'ap-southeast-2',
   apiVersion: 'latest',
   credentials: {
  accessKeyId: process.env.REACT_APP_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_ACCESS_KEY
   
   }
 });
const s3 = new AWS.S3();

const params = {
  Bucket: 'newfarmbc2a76c5bd06460fb06f77e7e5b867e5204949-dev',
  Delimiter: '',
  Prefix: '/private',
};

const List = () => {
  const [listFiles, setListFiles] = useState([]);

  useEffect(() => {
     s3.listObjectsV2(params, (err, data) => {
      
      if (err) {
        console.log(err, err.stack);
      } else {
        setListFiles(data.Contents);
        console.log(data.Contents);
      }
    });
  }, []);

  return (
    <div className='card'>
      <div className='card-header'>Cunningham</div>
      <ul className='list-group'>
        {listFiles &&
          listFiles.map((name, index) => (
            <li className='list-group-item' key={index}>
              {name.Key}
            </li>
          ))}

      </ul>
    </div>
  );
};

export default List;

