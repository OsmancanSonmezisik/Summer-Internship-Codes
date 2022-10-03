class Person {
  constructor(fName,lName) {
    this.fName = fName;
    this.lName = lName;
  }    
   fullName() {
      return this.fName + " " + this.lName;     
    }
}

class Student extends Person {
  constructor(fName,lName,department,number,grade) {
    super(fName,lName);
    this.department = department;
    this.number = number;
    this.grade = grade;
  }

  get firstName() {
    return this.fName;
  }

  set firstName(x) {
    this.fName = x;
  }

  student_info() {
    return "Full Name: " + this.fullName() + "<br> Department: " + this.department 
    + "<br> Number: " + this.number + "<br> Grade: " + this.grade;
  }
}


let student1 = new Student("John","Doe","Computer Engineering",123456,"4th");
student1.firstName = "Jack";
document.getElementById("p1").innerHTML ="Student 1 <br>" +  student1.student_info();
document.getElementById("p2").innerHTML = student1.firstName;
