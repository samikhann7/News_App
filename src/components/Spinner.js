import React, { Component } from 'react'
import loading from './loading.gif'
// export class spinner extends Component {
//   render() {
//     return (
//       <div className='text-center spin'>
//         <img src={loading} alt="loading..." />
//       </div>
//     )
//   }
// }
const Spinner=()=>{
  return (
    <div className='text-center spin'>
      <img src={loading} alt="loading..." />
    </div>
  )
  
}

export default Spinner
