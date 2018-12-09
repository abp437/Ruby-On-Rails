require_relative 'authenticator_bcrypt'

users = [
  { username: 'Akshay', password: 'the rock' },
  { username: 'Hitesh', password: 'stone cold' },
  { username: 'Sourabh', password: 'hello world' },
  { username: 'Shailesh', password: '2shailesh' },
  { username: 'Akash', password: 'nazional leibstandarte' }
]

# Don't access methods on a Module Directly.
# Include it in a class and then access it on the Class or Objects of that Class

# hashed_users = UserAuthenticate::ClassMethods.create_secure_passwords(users)

# puts 'Enter User Details:'
# puts 'Username:'
# username = gets.chomp
# puts 'Password:'
# password = gets.chomp

# p UserAuthenticate::InstanceMethods::authenticate_user(username, password, hashed_users)
