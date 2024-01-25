import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../auth/Login.scss'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [login, setLogin] = useState('')
	const navigate = useNavigate()
	const onSubmit = async e => {
		e.preventDefault()
		let req = await fetch('https://reqres.in/api/login', {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json',
					  'Accept': 'application/json'
				  },
			
		  body: JSON.stringify({
			email: email,
			password: password,
		  }),
		})
		  req = await req.json()
		
		if (req.token) {
		  navigate('/home')
		  localStorage.setItem('accessToken', req.token)
		  setError('')
		} else {
		  setError('Invaid input! Chek your email or password and try again')
		}
	  }
	return (
		<>
			<main>
		 	<div className="main-contant">
		 		<div className="sign-page">
		 			<div className="logging">
						<h1>Sign In</h1>
						<form onSubmit={onSubmit}>
							<p>Email Address</p>
							<input 
							type="email" 
							placeholder='name@example.com'
							onChange={({ target }) => setEmail(target.value)}
							/>
							<p>Your Password</p>
							<input 
							type="password"
							placeholder='Password'
							onChange={({ target }) => setPassword(target.value)} />
							<span>{error}</span>
							<button type='submit' className='butt'>Sign In</button>
		 				</form>
						 <div className="other-state">
						<div className="lost-pass">
							<p>Forget Password?</p>
						</div>
						<div className="help">
							<p>Don't have an account?</p>
							<span>Sign Up</span>
						</div>
					</div>
					</div>
					{/* <div className="circleSmaller"></div> */}
					<aside>
						<h2>Hey Welcome Back</h2>
						<div className="small-circle"></div>
					</aside>
					
		 		</div>
		 	</div>
		    </main>
		</>
	
	)
}
export default Login;