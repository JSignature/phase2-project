convert a string to use interpolation
const name = "John";
const response = "Save Earth, ${name}";

const newResponse = response.replace(/\${\w+}/ ,name);

console.log(newResponse);

const clientName = 'Janelle'
const date = 'Tuesday'
const email = `Hello Mrs. ${clientName} We see you have a grooming appointment on ${date}`
return (
<div>
<p> {email}</p>
</div>
)
