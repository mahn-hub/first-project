// String
console.log("strings");
let firstName = "Mahnoor";
let lastName = "Naveed";
let fullName = firstName + " " + lastName;
console.log(fullName);
// String concatenation using template literals
let fullNameTemplate = `${firstName} ${lastName}`;
console.log(fullNameTemplate);
// String properties and methods
console.log("Length of full name:", fullName.length);
console.log("Uppercase full name:", fullName.toUpperCase());
console.log("Lowercase full name:", fullName.toLowerCase());
console.log("First character of full name:", fullName.charAt(0));
console.log("Index of 'a' in full name:", fullName.indexOf('a'));
console.log("Last index of 'a' in full name:", fullName.lastIndexOf('a'));
console.log("Substring of full name from index 0 to 5:", fullName.substring(0, 5));
console.log("Replace 'sadia' with 'mahnoor':", fullName.replace('sadia', 'mahnoor'));
console.log("Split full name into an array:", fullName.split(' '));
console.log("Trimmed full name:", fullName.trim());
console.log("Includes 'Naveed' in full name:", fullName.includes('Naveed'));