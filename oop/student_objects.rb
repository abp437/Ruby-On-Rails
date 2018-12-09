require_relative 'student'
require_relative 'authenticator_module/authenticator_bcrypt'

akshay = Student.new('Akshay', 'Pawar',
                     'abp437@gmail.com',
                     'abp437', 'the rock')

all_students = Student.all

student_hash = []

all_students.each do |student|
  student_hash << { username: student.username, password: student.password }
end

encrypted_students = Student.create_secure_passwords(student_hash)

p akshay.authenticate_user('abp437', 'the rock', encrypted_students)
