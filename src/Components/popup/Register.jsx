import React, { Component } from 'react';
import axios from 'axios'
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Register extends Component {
  constructor(props) {
    super(props)
    this.usernameInput = React.createRef()
    this.passwordInput = React.createRef()
    this.repasswordInput = React.createRef()
    this.emailInput = React.createRef()
    this.state = {
      email: '',
      username: '',
      password: '',
      repassword: '',
      usernameInvalidClass: '',
      passwordInvalidClass: '',
      repasswordInvalidClass: '',
      emailInvalidClass: ''

    }
    this.registerAction = this.registerAction.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeRePassword = this.onChangeRePassword.bind(this)

  }

  registerAction = () => {
    if (this.state.username.length <= 6) {
      this.usernameInput.current.focus();
      return
    } else if (this.state.password.length <= 6) {
      this.passwordInput.current.focus();
      return
    } else if (this.state.repassword !== this.state.password) {
      this.repasswordInput.current.focus();
      this.setState({
        repasswordInvalidClass: "singin-popup-form-inputrepw--invalid--display"
      })
      return
    } else if (!validateEmail(this.state.email)) {
      this.emailInput.current.focus();
      return
    }
    const data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    axios.post('http://localhost:8080/api/v1/register', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }


  onChangeEmail = (event) => {
    let email = event.target.value
    let isValidate = validateEmail(email)
    this.setState({
      email: email,
      emailInvalidClass: !isValidate ? "singin-popup-form-input--invalid--email" : ""
    })
  }

  onChangeUsername = (event) => {
    let username = event.target.value
    this.setState({
      username: username,
      usernameInvalidClass: username.length <= 6 ? "singin-popup-form-input--invalid--display" : ""
    })
  }

  onChangePassword = (event) => {
    let password = event.target.value
    this.setState({
      password: event.target.value,
      passwordInvalidClass: password.length <= 6 ? "singin-popup-form-inputpw--invalid--display" : ""
    })
  }

  onChangeRePassword = (event) => {
    let repassword = event.target.value
    this.setState({
      repassword: event.target.value,
      repasswordInvalidClass: repassword !== this.state.password ? "singin-popup-form-inputrepw--invalid--display" : ""
    })
  }

  render() {
    return (
      <div className="singin_popup">
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
              <input ref={this.usernameInput} autoComplete='off' value={this.state.username} onChange={this.onChangeUsername} type="text" id='singin-user' className={'singin-popup-form-input ' + this.state.usernameInvalidClass} maxLength='30' />
              <p className={"singin-popup-form-input--invalid " + this.state.usernameInvalidClass}>Tên tài khoản tối thiểu 6 ký tự.</p>
            </div>

            <div className="singin_popup_form--float-right">
              <label className="singin_popup_form--float-right-label" htmlFor="singin-password">Mật khẩu
                <span className='singin_popup_form--float-right--required'>*</span>
              </label>
              <input ref={this.passwordInput} autoComplete='off' value={this.state.password} onChange={this.onChangePassword} maxLength='30' type="password" id='singin-password' className={'singin-popup-form-input ' + this.state.passwordInvalidClass} />
              <p className={"singin-popup-form-inputpw--invalid " + this.state.passwordInvalidClass}>Mật khẩu tối thiểu 6 ký tự.</p>

            </div>

            <div className="singin_popup_form--float-right">
              <label className="singin_popup_form--float-right-label" htmlFor="singin-repassword">Nhập lại mật khẩu
                <span className='singin_popup_form--float-right--required'>*</span>
              </label>
              <input ref={this.repasswordInput} autoComplete='off' value={this.state.repassword} onChange={this.onChangeRePassword} maxLength='30' type="password" id='singin-repassword' className='singin-popup-form-input' />
              <p className={"singin-popup-form-inputrepw--invalid " + this.state.repasswordInvalidClass}>Mật khẩu nhập lại không đúng.</p>

            </div>

            <div className="singin_popup_form--float-right">
              <label className="singin_popup_form--float-right-label" htmlFor="singin-email">Email
                <span className='singin_popup_form--float-right--required'>*</span>
              </label>
              <input ref={this.emailInput} type="text" id='singin-email' className={'singin-popup-form-input ' + this.state.emailInvalidClass} value={this.state.email} onChange={this.onChangeEmail} />
              <p className={"singin-popup-form-input--invalid-email-text " + this.state.emailInvalidClass}>Email không hợp lệ.</p>
            </div>

            <div className="singin_popup_form-register">
              <input className="singin_popup_form-register-checkbox" type="checkbox" name="" id="" />
              <p className="singin_popup_form-register-text-check">Tôi đã đọc và đồng ý các điều kiện</p>
              <a href="" className="singin_popup_form-register-deal">Thỏa thuận sử dụng</a>
            </div>
            <div>
              <button onClick={this.registerAction} type="button" className="singin_popup_form-action" href="">Đăng ký mới</button>
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
}

export default Register;
