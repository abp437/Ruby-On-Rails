require_relative "authenticator_bcrypt"

users = [
  {username: "Akshay", password: "the rock"},
  {username: "Hitesh", password: "stone cold"},
  {username: "Sourabh", password: "hello world"},
  {username: "Shailesh", password: "2shailesh"},
  {username: "Akash", password: "nazional leibstandarte"},
]

hashed_users = UserAuthenticate.create_secure_passwords(users)

puts "Enter User Details:"
puts "Username:"
username = gets.chomp
puts "Password:"
password = gets.chomp

p UserAuthenticate.authenticate_user(username, password, hashed_users)
