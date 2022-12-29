import React from 'react'
import styles from './signup.module.css'

function Signup() {
  return (
    <div className='d-grid gap-2 col-4 mx-auto p-3'>
      <h5 className='text-center'>Create your Stack Overflow account. It’s free and only takes a minute.
      </h5>
      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-secondary" type="button">Sign up with Google</button>
        <button className="btn btn-dark" type="button">Sign up with Github</button>
        <button className="btn btn-primary" type="button">Sign up with Facebook</button>
      </div>

      <form className='d-grid gap-2 p-4 mt-4 bg-light shadow-sm rounded' >
        <div className="form-group">
          <label for="display-name" className="fw-bold pb-1">Display name</label><br />
          <input type="text" name="display-name" id="display-name" className="form-control" />
        </div>
        <div className="form-group">
          <label for="email" className="fw-bold pb-1">Email</label><br />
          <input type="email" name="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label for="password" className="fw-bold pb-1">Password</label><br />
          <input type="password" name="password" id="password" className="form-control" />
          <span className={styles.note}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</span>
        </div>

        <button type="button" class="btn btn-primary mt-2">Signup</button>
        <div className={`${styles.note} mt-4 mx-auto text-center`}>
          <p className='m-0'>By clicking “Sign up”, you agree to our
            <a className='text-decoration-none' href="/#"> terms of service, privacy policy and cookie policy</a>
          </p>
        </div>
      </form>

    </div>
  )
}

export default Signup