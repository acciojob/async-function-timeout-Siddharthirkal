//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}

btn.addEventListener("click",async()=>{
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;

	await wait(delay);

	output.textContent = text;
});