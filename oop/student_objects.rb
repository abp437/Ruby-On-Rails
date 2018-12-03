require_relative "student"
require_relative "../authenticator/authenticator_bcrypt"

akshay = Student.new("Akshay", "Pawar", "abp437@gmail.com", "abp437", "the rock")
hitesh = Student.new("Hitesh", "Patil", "htp437@gmail.com", "htp437", "stone cold")

all_students = Student::all

student_hash = []

all_students.each do |student|
  student_hash << {username: student.username, password: student.password}
end

encrypted_students = ClassMethods::create_secure_passwords(student_hash)
#
# p akshay.create_hash_digest("abp437", "the rock", encrypted_students)
