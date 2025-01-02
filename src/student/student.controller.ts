@Delete(':id')
async remove(@Param('id') id: number): Promise<void> {
  return this.studentService.remove(id);
}
