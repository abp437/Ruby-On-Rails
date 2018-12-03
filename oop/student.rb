require_relative "../authenticator/authenticator_bcrypt"

class Student
  # "attr_accessor" - This defines both Getters and Setters.
  attr_accessor :first_name, :last_name
  # "attr_reader" - This defines Getters only.
  attr_reader :username, :password

  # You can access the methods of a module on this class directly by including the module.
  # This way all the methods of the module get attached to this Class.
  include UserAuthenticate

  def initialize(first_name, last_name, email, username, password)
    @first_name = first_name
    @last_name = last_name
    @email = email
    @username = username
    @password = password
  end

  def to_s
    "First name: #{@first_name}"
  end

  # The names of getter and setter methods can be anything, since at the end of the day they are just methods.
  # Setter:
  # This is a setter method which can be used to set attrbutes of an object
  # We have to explicitly define such setter methods since there's no implicit write access to object's properties in a Ruby Class.
  # Syntax:
  # def method_name=(new_attribute_value)
  # def first_name=(name)
  #   @first_name = name
  # end

  # Getter:
  # Getters are used to get the attributes of an Object.
  # These methods are very simple, we just have to return the instance variables.
  # def first_name
  #   @first_name
  # end

  # But the most efficient way of getters and setters is "attr_accessor" which provides us getter and setter methods altogether of the specified attributes.

  def self.all
    ObjectSpace.each_object(self).to_a
  end

  def self.count
    all.count
  end
end

# Whenever we try to print out an object in Ruby then it defaults to the "to_s" method in Ruby
# Which by default gives us the object address. So if we want to cutsomize it then we should define
# Our own "to_s" method in the class definition itself
