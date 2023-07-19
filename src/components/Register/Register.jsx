import React from "react";
import { useSignUpForm } from "./../../hooks/useSignUpForm";

export default function Register() {
  const { handleChange, handleSubmit, values } = useSignUpForm();

  return (
    <div className="w-75 mx-auto py-4 mt-5 text-center">
      <h3 className="my-2 mb-4">Register Now :</h3>

      <form class="signUpForm">
      
          <label>
            <input
            placeholder="First Name"
              type="text"
              id="name"
              name="name"
              className="form-control my-2"
              value={values.name}
              onChange={handleChange}
            />
          </label>
        <label>
          <input type="email" 
            placeholder="Email"
          id="email"
          name="email"
          className="form-control my-2"
          value={values.email}
          onChange={handleChange}/>
        </label>
        <label>
          <input type="password" 
            placeholder="Password"
          id="password"
          name="password"
          className="form-control my-2"
          value={values.password}
          onChange={handleChange}/>
        </label>
        <label>
          <input type="password" 
            placeholder="rePassword"
          id="rePassword"
          name="rePassword"
          className="form-control my-2"
          value={values.rePassword}
          onChange={handleChange}/>
        </label>

        <label>
          <input type="tel"
            placeholder="Phone"
          id="phone"
          name="phone"
          className="form-control my-2"
          value={values.phone}
          onChange={handleChange} />
        </label>

        <button class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text">submit</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
}
