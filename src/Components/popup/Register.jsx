import React, { useState, useRef } from 'react';
import axios from 'axios'
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default function Register() {

  const usernameInput = useRef();
  const passwordInput = useRef();
  const repasswordInput = useRef();
  const emailInput = useRef();
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [usernameInvalidClass, setUsernameInvalidClass] = useState("");
  const [passwordInvalidClass, setPasswordInvalidClass] = useState("");
  const [repasswordInvalidClass, setRepasswordInvalidClass] = useState("");
  const [emailInvalidClass, setEmailInvalidClass] = useState("");

  const registerAction = () => {
    if (username.length <= 6) {
      usernameInput.current.focus();
      return
    } else if (password.length <= 6) {
      passwordInput.current.focus();
      return
    } else if (repassword !== password) {
      repasswordInput.current.focus();
      setRepasswordInvalidClass("singin-popup-form-inputrepw--invalid--display")
      return
    } else if (!validateEmail(email)) {
      emailInput.current.focus();
      return
    }
    const data = {
      username: username,
      password: password,
      email: email
    }
    axios.post('http://localhost:8080/api/v1/register', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }


  const onChangeEmail = (event) => {
    let email = event.target.value
    let isValidate = validateEmail(email)
    setEmail(email)
    setEmailInvalidClass(!isValidate ? "singin-popup-form-input--invalid--email" : "")

  }

  const onChangeUsername = (event) => {
    let username = event.target.value
    setusername(username);
    setUsernameInvalidClass(username.length < 6 ? "singin-popup-form-input--invalid--display" : "")
  }

  const onChangePassword = (event) => {
    let password = event.target.value
    setPassword(password)
    setPasswordInvalidClass(password.length < 6 ? "singin-popup-form-inputpw--invalid--display" : "")
  }

  const onChangeRePassword = (event) => {
    let repassword = event.target.value
    setRepassword(repassword)
    setRepasswordInvalidClass(repassword !== password ? "singin-popup-form-inputrepw--invalid--display" : "")
  }


  return (
    <div className={"singin_popup "}>
      <div className="singin_popup-title">
        Dang Ky
      </div>
      <div className="singin-popup-form">
        <form>
          <div className="singin_popup_form--float-right singin_popup_form--float-right--no-top">
            <p className="singin_popup_form--float-right--p">Những thông tin có đánh dấu (
              <span class="span-required" >*</span>
              ) là bắt buộc nhập.</p>
          </div>
          <div className="singin_popup_form--float-right">
            <label className="singin_popup_form--float-right-label" htmlFor="singin-user">Tên đăng nhập
              <span className='singin_popup_form--float-right--required'>*</span>
            </label>
            <input ref={usernameInput} autoComplete='off' value={username} onChange={onChangeUsername} type="text" id='singin-user' className={'singin-popup-form-input ' + usernameInvalidClass} maxLength='30' />
            <p className={"singin-popup-form-input--invalid " + usernameInvalidClass}>Tên tài khoản tối thiểu 6 ký tự.</p>
          </div>

          <div className="singin_popup_form--float-right">
            <label className="singin_popup_form--float-right-label" htmlFor="singin-password">Mật khẩu
              <span className='singin_popup_form--float-right--required'>*</span>
            </label>
            <input ref={passwordInput} autoComplete='off' value={password} onChange={onChangePassword} maxLength='30' type="password" id='singin-password' className={'singin-popup-form-input ' + passwordInvalidClass} />
            <p className={"singin-popup-form-inputpw--invalid " + passwordInvalidClass}>Mật khẩu tối thiểu 6 ký tự.</p>

          </div>

          <div className="singin_popup_form--float-right">
            <label className="singin_popup_form--float-right-label" htmlFor="singin-repassword">Nhập lại mật khẩu
              <span className='singin_popup_form--float-right--required'>*</span>
            </label>
            <input ref={repasswordInput} autoComplete='off' value={repassword} onChange={onChangeRePassword} maxLength='30' type="password" id='singin-repassword' className='singin-popup-form-input' />
            <p className={"singin-popup-form-inputrepw--invalid " + repasswordInvalidClass}>Mật khẩu nhập lại không đúng.</p>

          </div>

          <div className="singin_popup_form--float-right">
            <label className="singin_popup_form--float-right-label" htmlFor="singin-email">Email
              <span className='singin_popup_form--float-right--required'>*</span>
            </label>
            <input ref={emailInput} type="text" id='singin-email' className={'singin-popup-form-input ' + emailInvalidClass} value={email} onChange={onChangeEmail} />
            <p className={"singin-popup-form-input--invalid-email-text " + emailInvalidClass}>Email không hợp lệ.</p>
          </div>

          <div className="singin_popup_form-register">
            <input className="singin_popup_form-register-checkbox" type="checkbox" name="" id="" />
            <p className="singin_popup_form-register-text-check">Tôi đã đọc và đồng ý các điều kiện</p>
            <a href="" className="singin_popup_form-register-deal">Thỏa thuận sử dụng</a>
          </div>
          <div>
            <button onClick={registerAction} type="button" className="singin_popup_form-action" href="">Đăng ký mới</button>
          </div>
        </form>
      </div>
      <div className="popup-regiter-area-login">
        <p className="popup-regiter-area-login--text">Đã có tài khoản NCT ID?</p>
        <a className="popup-regiter-area-login--login-now" href="">Đăng nhập ngay</a>
        <div className="popup-regiter-area-login-box-like-or">
          <div className="popup-regiter-area-login-box-like-or--solid"></div>
          <label className="popup-regiter-area-login-box-like-or--text">HOẶC</label>
        </div>
      </div>
    </div>
  );

}
