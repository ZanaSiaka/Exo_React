import React, { useEffect, useState, useContext} from "react";
import { FirebaseContext } from "../Firebase";

const Logout = () => {

	const firebase = useContext(FirebaseContext)

	const [checked, setChecked] = useState(false);

	console.log(checked)

	useEffect(() => {
		if (checked) {
			firebase.signoutUser()
		}
	}, [checked, firebase])

	const handleChange = e => {
		setChecked(e.target.checked)
	}

	return (
		<div className="logoutCointainer">
		<label className="switch">
			<input onChange={handleChange} value={checked} type="checkbox" checked={checked} />
			<span className="slider round"></span>
		</label>
		</div>
	);
	};

export default Logout;
