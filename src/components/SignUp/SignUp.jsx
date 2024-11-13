import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";


const SignUp = () => {

	const [errorMessage, setErrorMessage] = useState('');

	const handleSignUp = e => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);

		//reset error message
		setErrorMessage('');

		//create firebase authentication
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				console.log(result.user);
			})
			.catch(error => {
				console.log('errror',error.message);
				setErrorMessage(error.message)
			})
	}
	return (


				<div className="card bg-base-100 mx-auto my-8 w-full max-w-sm shrink-0 shadow-lg">
					<h3 className="text-3xl font-bold ml-4 text-center">Sign Up now!</h3>

					<form onSubmit={handleSignUp} className="card-body">
						<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input type="email" name="email" placeholder="email" className="input input-bordered" required />
						</div>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input type="password" name="password" placeholder="password" className="input input-bordered" required />
						<label className="label">
							<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
						</label>
						</div>
						<div className="form-control mt-6">
						<button className="btn btn-primary">Sign Up</button>
						</div>
					</form>
					{
						errorMessage && <p className="text-red-500">{errorMessage}</p>
					}
				</div>

	);
};

export default SignUp;