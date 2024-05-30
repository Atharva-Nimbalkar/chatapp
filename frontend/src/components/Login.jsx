// // import React from 'react'
import { NavLink } from "react-router-dom"
export const Login = () => {
  return (
    <>
      <div className="register">
          <div className="card">
              <div className="card-header">
                <h3>Login</h3>
               </div>
           <div className="card-body">
                <form>
                  <div className="form-group">
                      <label htmlFor="email">
                          email
                      </label>
                      <input type="email" className="form-control" placeholder="email" id="email" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="password">
                          Password
                      </label>
                      <input type="password" className="form-control" placeholder="password" id="password" />
                  </div>

                
                <div>
                  <div>
                        <div className="form-group">
                            <input type='submit' value="login" className="btn"/>
                        </div>
                        <div className="form-group">
                            <span><NavLink to='/connectnow/register'>Do not Have any account</NavLink></span>
                        </div>
                  </div>
                </div>
                </form>
            </div>     
          </div>
        </div>
    </>
  )
}


