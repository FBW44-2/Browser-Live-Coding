import React from 'react'

export default function Login() {
    return (
        <div>
              <form>
                <label>
                    Email: <input type="email" name="email" placeholder="Enter Email" required  />
                </label><br />
                <label>
                    Password: <input type="password" name="password" placeholder="Enter password"  required />
                </label><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
