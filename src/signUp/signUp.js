import { useState } from 'react';
import '../static/styles/buttons.css';
import '../static/styles/principal.css'
import './signUp.css'


function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    console.log('Your data is recorded')
    console.log('name: ' + name + ' Email: ' + email + ' Password: ' + password)

  }

  return (
    <div>
      <section className='body_signUp'>
        <div className='signUp_box'>
          <form action="#" className='signUp_form'>
            <p className='title_form'> Introduzca sus datos</p>
            <label > 
              <p>Email</p>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
            </label>
            <label > 
              <p>Name</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
            </label> 
            <label > 
              <p>Password</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
            </label>
            <div>
              <button onClick={handleSubmit} className="btn_confirm">Confirm</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;