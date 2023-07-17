import React, { useState } from 'react'


const data = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]


function App() {
    let [mail, setMail] = useState('');
    let [password, setPassword] = useState('');
    let [user, setuser] = useState('');
    let [pass, setPass] = useState('');

    function handle() {
        if ((!password && !mail) || (!password || !mail)) {
            setuser('Field cant be empty')
            return;
        }
        if (mail) {
            matched = data.map((email) => (
                email.email === mail
            ))
            if (!matched) {
                setuser('User not found');
                return
            }
        }
        if (password) {
            matched = data.map((passcode) => (
                passcode.password === password
            ))
            if (!matched) {
                setPass("Password Incorrect");
                return
            }
        }
        setTimeout(() => {
            data.map((obj) => {
                if (obj.password === password) {
                    console.log(obj);
                    setPass('');
                    setuser('');
                }
            })
        }, 3000)

    }

    return (
        <div>
            <form onSubmit={handle}>
                <input type='email' id='input-email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                <input type='password' id='input-password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit' id='submit-form-btn' />
            </form>

            <p id='user-error'>{user && user}</p>
            <p id='password-error'>{pass && pass}</p>
        </div>
    )
}

export default App