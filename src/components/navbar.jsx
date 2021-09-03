import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <Link className='navbar' to='/'>
        <span className='home link'>
          Home{" "}
        </span>
      </Link>
      <Link className='navbar' to='/newdocument'>
        <span className='new-document link'>
          New Document{" "}
        </span>
      </Link>
      <Link className='navbar' to='/update'>
        <span className='update link'>
          Update Document{" "}
        </span>
      </Link>
      <Link className='navbar' to='/userManagement'>
        <span className='user-management link'>
          User Management{" "}
        </span>
      </Link>
    </div>
  )
}

export default Navbar;
