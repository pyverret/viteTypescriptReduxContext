import {ChangeEvent, FormEvent, useContext, useState} from "react";
import FormContext from "./FormContext";
import {useFormContext} from "./useFormContext";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {id} = useFormContext();

    function handleSubmit (event: FormEvent) {
        event.preventDefault();
        console.log(id);

        console.log("Email", email);
        console.log("Password", password);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email *</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                value={email}
                required
            />
        </div>
        <div>
            <label htmlFor="password">Password *</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                value={password}
                required
            />
        </div>
        <button type="submit">Sign up</button>
    </form>
}