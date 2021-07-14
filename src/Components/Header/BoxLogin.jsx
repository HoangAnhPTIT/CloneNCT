import React from 'react';
import { clickBtnRegister } from '../../feature/register/registerSlice';

import { useDispatch } from 'react-redux'


export default function BoxLogin() {
  const dispatch = useDispatch()
  return (
    <div className='hearder_navbar-item-login-box '>
      <div className='hearder_navbar-item-login-box-login'>Dang Nhap</div>
      <div onClick={() => dispatch(clickBtnRegister())} className='hearder_navbar-item-login-box-singin'>Dang Ky</div>

    </div>
  );
}
