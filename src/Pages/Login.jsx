import React from 'react'
import '../css/login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { ImAppleinc } from 'react-icons/im';
import { CiMail } from 'react-icons/ci';
const Login = () => {
    return (
        <div className='loginpage'>
            <div className='login'>
                <div className='login__title'>
                    <img src='cloud-icon.png' alt='cloud-icon' className='login__title--image'></img>
                    <h2>Airspace</h2>
                </div>

                <div className='login__email'>
                    <label className='login__label'>Email</label>
                    <input type="text" placeholder="Airspace@info..com" className='login__input'></input>
                </div>

                <div className='login__password'>
                    <label className='login__label'>Password</label>
                    <input type="password" placeholder="************" className='login__input'></input>
                </div>

                <div className='login__remember'>
                    <div className='checkbox'>
                        <input type="checkbox"></input>
                    </div>

                    <div className='login__checktext'>
                        <b>Remember me</b><br />
                        Save my login details for next time.
                    </div>
                </div>

                <button className='signin__button'>Sign In</button>
                <pre>OR</pre>

                <div className='login__signup'>Don't have an account? <u>Sign up</u></div>
                <div className="login__buttons">
                    <button className='login__google'><FcGoogle className='icon' />  Sign in with Google</button>
                    <button className='login__facebook'><FaFacebook className='icon' /> Sign in with Facebook</button>
                    <button className='login__apple'><ImAppleinc className='icon' /> Sign in with Apple</button>
                </div>

                <h6 className='login__copyright'> © Copright 2023 Airspace Corporation</h6>
            </div>

            <div className='content'>
                <div className='content__description'>
                    Securely Upload And Store Your Important Documents With <u>Airspace!</u>
                </div>
                <div className='content__image'>
                    <img src='web-logo.png' className='content__image'></img>
                </div>
            </div>
        </div>
    )
}

export default Login
