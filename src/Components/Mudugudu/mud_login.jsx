import React, { Component } from 'react';
import './mud_log.css'

class Mud_Login extends Component {
    render() {
        return (
            <>
                <div className='mud-login-page'>

                    <div className='left-side'>

                        <div className='top'>
                            <button type="button" className="btn btn-secondary">Back</button>
                            <h1>Welcome  !</h1>
                        </div>

                        <div className='logo'>
                            <h1>My Village</h1>
                        </div>

                        <div className='bottom'>
                            <h4>“Keeping you connected to your village”</h4>
                        </div>

                    </div>

                    <div className='right-side'>
                        <div className='mud-login'>
                            <h2>Mudugudu Login</h2>

                            <form>

                                <div className="container">
                                    <label for="telnum"><b>Telphone Number</b></label>
                                    <input type="tel" placeholder="+250" name="telnum" />

                                    <label for="psw"><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="psw" />
                                </div>

                                <div className="log-btn">
                                    <button type="submit">Login</button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Mud_Login;