function teacher(age, qualification) {
	this.age = age;
	this.qualification = qualification;
}

function person(name, subject) {
	teacher.call(this, name, subject);
	this.name = name;
	this.subject = subject;
}
let p1 = new person("21", "BE", "siva", "js");
console.log(p1);
