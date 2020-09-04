import React,{ useEffect } from 'react'

export default function Order() {

	const sendOrder = () => {
		
       let x = localStorage.getItem("checkout");

		const  payload = {
			name: ":first",
			products: JSON.parse(x)
		}
		
		fetch("https://mock-data-api.firebaseio.com/e-commerce/orders/group-3.json",{
			method: "POST",
			body: JSON.stringify(payload),
		})
		.then((res) => res.json())
		.then(data => {
			console.log(data.response);
		});
	}

	// useEffect(() => {
	// //	sendOrder();
	// },[])

	return (
		<div>
			<button onClick={sendOrder}>Send order</button>
		</div>
	)
}
