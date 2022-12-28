import { render } from "@testing-library/react"
import { useState } from "react"

//controlled input - koga kje kliknesh na input komponentata se zapishuva nov state i se renderira(sekoe pole so soodveten state e povrzano)
//uncontrolled -
//form = method, action, onSubmit event
export const LogIn = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`User Submited : ${username} and password : ${password}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type="text" 
                value={username} 
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
        />

            <br />

            <label>Password</label>
            <input 
                type="password" 
                value={password} 
                onChange={(event) => {
                    setPassword(event.target.value)
                }} 
        />

        <div>
            <button type="submit">LogIn</button>
        </div>

        <hr /><hr /><hr />
        <div>
            Username : {username}
            <br />
            
            Password : {password}
        </div>
        </form>
    )
}