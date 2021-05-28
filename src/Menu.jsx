import React from 'react';
import {Link} from 'react-router-dom';

const Menu=()=>{
    
    return(
     <>
      <Link exact activeClassName="active_class" to='/about'>About</Link>
      <Link activeClassName="active_class" to='/contact'>Contact</Link>
        
     </>    
    );

    
    
}
 
export default Menu;

                     