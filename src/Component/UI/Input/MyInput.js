// imput value sini olishni boshqara olmidigon usuli


// import React from 'react';

// const MyInput = React.forwardRef((props, ref) => {
//   return (
//     <input {...props} ref={ref} />
//   );
// })

// export default MyInput;



// imput value sini olishni boshqara oladigon  usuli


import React from 'react';

function MyInput(props){
  return (
    <input {...props} />
  );
}

export default MyInput;