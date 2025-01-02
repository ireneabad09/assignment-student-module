async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
  await this.studentRepository.update(id, updateStudentDto);
  return this.studentRepository.findOne(id);
}
