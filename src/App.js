import { React, useState } from "react"
import "./style.css"

const App = () => {
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState(
        {
            email: "", 
            password: "", 
            confirmPassword: "",
            join: false
        }
    );

    const handleInput = (event) => {
        const { name, value, checked, type} = event.target; 
        setFormData(prevData => ({
            ...prevData, 
            [name]: type === "checkbox" ? checked : value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        formData.password === formData.confirmPassword ? setPasswordMatch(true) : setPasswordMatch(false);
    };

    const formResult = () => {
        return submitted 
        ? passwordMatch 
            ? formData.join
                ?   <div>
                        <div className="container">
                            <div className="success">Form successfully submitted!</div> 
                        </div>
                        <div className="container">
                            <div className="join-newsletter">Thanks for signing up for our newsletter!</div>
                        </div>
                    </div>
                :   <div className="container">
                        <div className="success">Form successfully submitted!</div> 
                    </div>
            :   <div className="container">
                    <div className="failure">Passwords do not match!</div>
                </div>    
        : <></>
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleInput}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleInput}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    onChange={handleInput}
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="join"
                        checked={formData.join}  
                        onChange={handleInput}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
                {formResult()}
            </form>
        </div>
    )
}

export default App;