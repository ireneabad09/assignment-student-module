export class CreateStudentDto {
  firstName: string;
  lastName: string;
  email: string;
  enrollmentDate: Date;

  constructor(firstName: string, lastName: string, email: string, enrollmentDate: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.enrollmentDate = enrollmentDate;
  }
}
