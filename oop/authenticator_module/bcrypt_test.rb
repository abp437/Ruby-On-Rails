require "bcrypt"

# BCrypt adds salt to each encryption, so each encoding will be different from the previous one.
# But the authentication works seamlessly, regardless the salts, salts are just added for security.

my_password = BCrypt::Password.create("the rock")

puts my_password == "the rock"
puts my_password == "the rocks"

my_password = BCrypt::Password.new("$2a$10$2s12ZXKvN5URb3nxPAXJHOWqQfXAZkliKacpYFKY4V1KHPJPylUcW")
puts my_password == "the rock"
puts my_password == "the rocks"
