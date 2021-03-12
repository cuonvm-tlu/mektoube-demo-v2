import React, {useEffect} from 'react';

export default function NotFound() {
  console.log(localStorage.getItem("token"))
  return (
    <div> 
        404: File not found
    </div>
  );
}
      
    