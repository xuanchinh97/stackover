import React from 'react'
import styles from './login.module.css'

function Login() {
  return (
    <div className='d-grid gap-2 col-4 mx-auto p-3'>
      <img alt='logo' className={styles.logo} src='https//upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png' />

      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-secondary" type="button">Login with Google</button>
        <button className="btn btn-dark" type="button">Login with Github</button>
        <button className="btn btn-primary" type="button">Login with Facebook</button>
      </div>

      <form className='d-grid gap-2 p-4 mt-4 bg-light shadow-sm rounded' >
        <div className="form-group">
          <label for="username" className="fw-bold pb-1">Username</label><br />
          <input type="text" name="username" id="username" className="form-control" />
        </div>
        <div className="form-group">
          <label for="password" className="fw-bold pb-1">Password</label><br />
          <input type="password" name="password" id="password" className="form-control" />
        </div>
        <button type="button" class="btn btn-primary mt-2">Login</button>
      </form>

      <div className='mt-4 mx-auto text-center'>
        <p>Don’t have an account?
          <a className='text-decoration-none' href="./signup"> Sign up</a>
        </p>
        <p>Are you an employer?
          <a className='text-decoration-none' href="/#"> Sign up on Talent</a>
        </p>
      </div>
    </div>
  )
}

export default Login