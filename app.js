document.getElementById('btnToContact').addEventListener('click', function (){
	const contactUs = document.getElementById('contactUs');
	contactUs.scrollIntoView();
});

document.getElementById('btnToVendors').addEventListener('click', function (){
	const vendors = document.getElementById('vendors');
	vendors.scrollIntoView();
});

let form = document.getElementById('contactUs');
form.addEventListener('submit', (event) => {
	// handle the form data
	event.preventDefault();
	form.remove();
	const parentOfForm = document.getElementById('parentOfForm');
	const h4ThankYou = document.createElement('h4');
	h4ThankYou.innerText =
		'We appreciate you contacting Solo Vendors. One of our colleagues will get back in touch with you soon!';
	parentOfForm.appendChild(h4ThankYou);
});
