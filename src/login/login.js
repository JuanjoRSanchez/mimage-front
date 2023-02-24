import { useState } from 'react';
import './login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log('Your data is recorded')
        console.log('Email: ' + email + ' Password: ' + password)
    
      }

    return(
        <>
             <section className='body_signUp'>
                <div className='signUp_box'>
                    <form action="#" className='signUp_form'>
                        <p className='title_form'> Introduzca sus datos</p>
                        <label > 
                            <p>Email</p>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
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
        
        </>
    );
}

export default Login;