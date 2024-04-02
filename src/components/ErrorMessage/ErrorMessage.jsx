import React from 'react';

function ErrorMessage({ message }) {
   return (
      <div style={{ color: 'red', textAlign: 'center' }}>
         <p>Error: {message}</p>
      </div>
   );
}

export default ErrorMessage;
