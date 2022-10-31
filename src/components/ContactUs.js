import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/welcome'  )
  }
  return (
    <div>
        <h1>Remember to contact us </h1>
        <form>
          <label for="fname">Enter your name</label>
          <input type='text' placeholder='Enter your name'/>
          <br/>
          <br/>
          <label for="email">Enter yout email</label>
          <input type="text" placeholder="Enter your email"/>
          <br/>
          <br/>
          <label for="country">Country</label>
           <select id="country" name="country">
          <option value="australia">Nigeria</option>
           <option value="canada">France</option>
          <option value="usa">U S A</option>
           </select>
           <br/>
          <br/>
          <textarea placeholder='Enter your message'></textarea>
          <br/>
          <button onClick={handleSubmit}>Submit</button> 
        </form>
    </div>
  )
}

export default ContactUs