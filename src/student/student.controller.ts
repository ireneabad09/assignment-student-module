@Patch(':id')
async update(
  @Param('id') id: number,
  @Body() updateStudentDto: UpdateStudentDto,
): Promise<Student> {
  return this.studentService.update(id, updateStudentDto);
}
