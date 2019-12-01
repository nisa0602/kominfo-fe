import React from 'react';

function Homepage(props){
  return(
    <nav>
     <div className="nav-wrapper blue white">
       <a href="#" className="brand-logo center">
       <img src="https://i.ibb.co/tHCs9tH/Slice.png" alt="LOGO PERTAMINA" />
       </a>
       <ul id="nav-mobile" className="left hide-on-med-and-down">
         <li><img src="https://i.ibb.co/xgq3bTN/Bitmap.png" alt="LOGO USER" className="circle responsive-img"/></li>
       </ul>
     </div>
     <div className="nav-wrapper red darken-1">
       <div className="brand-logo right">
        <a className="waves-effect waves-lighten-5 btn-small ">Top Up</a>
       </div>

       <ul id="nav-mobile" className="left hide-on-med-and-down">
         <li><a href="sass.html">LOGO LINK AJA</a></li>
         <li><b>Rp.500.000</b></li>
       </ul>
     </div>
   </nav>
  )
}

export default Homepage
