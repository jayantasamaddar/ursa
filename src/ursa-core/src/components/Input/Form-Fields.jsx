import { useState } from 'react';
import { Link } from 'react-router-dom';
import './form-fields.css';

export function DisplayImage (props) {
    return (
        <>
        {props.showLabel}
        </>
    );
}

export function Text (props) {
    return (
        <div>
        {props.showLabel && <label htmlFor={props.name?.trim().toLowerCase()}>{props.name}</label>}
        <input type="text" name={props.name?.trim().toLowerCase()} placeholder={props.name} defaultValue = {props.defaultValue} onChange={props.onChange} />
        </div>
    ); 
}

export function FirstName (props) {
    return (
        <>
        {props.showLabel && <label htmlFor="firstname">First Name</label>}
        <input type="text" name="firstname" placeholder="First Name" defaultValue = {props.defaultValue} onChange={props.onChange} />
        </>
    ); 
}

export function LastName (props) {
    return (
        <>
        {props.showLabel && <label htmlFor="lastname">Last Name</label>}
        <input type="text" name="lastname" placeholder="Last Name" defaultValue = {props.defaultValue} onChange={props.onChange} />
        </>
    ); 
}

export function Email (props) {
    return (
        <>
        {props.showLabel && <label htmlFor="E-Mail Address">E-Mail</label>}
        <input className="email" type="email" name="email" placeholder="E-Mail Address" defaultValue = {props.defaultValue} onChange={props.onChange} />
        </>
    ); 
}

export function Phone (props) {
    return (
        <>
        {props.showLabel && <label htmlFor="Phone Number">Phone</label>}
        <input type="tel" name="phone" placeholder="Phone Number" defaultValue = {props.defaultValue} onChange={props.onChange} />
        </>
    ); 
}

//Props --> showLabel, withResetLink, name
export function Password (props) {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(prevState => !prevState);
    }

    const name = props.name && props.name.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, "-").toLowerCase();

    return (
        <>
        {props.showLabel && <label htmlFor="password" className="auth-forms-label">Password</label>}
        {props.withResetLink && <p className="forgot-password"><Link to="/account/reset-password">Forgot password?</Link></p>}

        <div className={`password-group flex my-10 ${props.confirm && "my-0"}`}>
            <p className="show-password" onClick={togglePasswordVisibility}><i className={`fas fa-eye${!passwordVisibility ? "-slash" : ""}`}></i></p>
            <input id={name || "password"} type={`${ passwordVisibility ? "text" : "password" }`} className={name || "password"} name={name || "password"} placeholder={`Enter your ${props.name || "Password"}`} required onChange={props.onChange} />
        </div>
        {props.confirm && <div className="flex my-10">
            <input id="confirm-password" type="password" className="confirm-password password" name="confirm-password" placeholder="Confirm your Password" required onChange={props.onChange} />
        </div>}
        </>
    ); 
}

export function Select (props) {
    return (
        <>
        <div className={`${props.type}-group flex flex-col my-10`} >
        <label htmlFor={props.name.trim().toLowerCase()} className="pb-10">{props.name}</label>
            {props.type === "radio" && props.options}
            {props.type === "dropdown" && 
            <>
            <select id={props.name.trim().toLowerCase()} className="dropdown" name={props.name.trim().toLowerCase()} value={props.value} onChange={props.onChange}>
                <option value="">--Select--</option>
                {props.options}
            </select>     
            </> 
            }
        </div>
        </>
    ); 
}

export function Radio (props) {
    return (
        <>
        {!props.hideLabel && <label htmlFor={props.value?.trim().toLowerCase()}>{props.value}</label>}
        <input id={props.value?.trim().toLowerCase()} type="radio" name={props.name?.trim().toLowerCase()} value={props.value} checked={props.checked ? true : false} onChange={props.onChange} />
        </>
    ); 
}

export function Option (props) {
    return (
        <>
        <option value={props.value} selected={props.selected}>{props.value}</option>
        </>
    ); 
}

export function DatePicker (props) {
    return (
        <>
        {props.showLabel && <label htmlFor={props.name.trim().toLowerCase()}>{props.name}</label>}
        <input type="date" name={props.name.trim().toLowerCase()} placeholder={props.name} defaultValue = {props.defaultValue} onChange={props.onChange} />
        </>
    ); 
}

export function Checkbox (props) {
    return (
        <>
        {props.showLabel && <label htmlFor={props.name.trim().toLowerCase()}>{props.name}</label>}
        <input className={`checkbox ${props.className ? props.className : ""}`} type="checkbox" checked={props.checked && props.checked} defaultValue = {props.defaultValue} onChange={props.onChange} />
        </>
    )
}