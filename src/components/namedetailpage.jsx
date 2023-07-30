import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function NameDetailPage() {
  const { name } = useParams();
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    console.log("entered here at frontend");
    axios.get(`http://localhost:5000/version/deployments/${name}`)
      .then((response) => {
        setDeployments(response.data.deployments);
        console.log("deployments is here: frontend")
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error if needed
      });
  }, [name]);

  return (
    <div id="nameDetail">
      <h1>Instances in {name}</h1>
      <ul>
        {deployments.map((deployment, index) => (
          <li key={index}>{deployment}</li>
        ))}
      </ul>
      {/* Additional content related to the name detail page */}
    </div>
  );
}
