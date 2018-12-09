# The below encryption-decryption logic can be exported as a module which can be used in other files.
# You can include a module into a class by doing a mixin.
# Modules are nothing but Toolkits.
module UserAuthenticate
  require 'bcrypt'

  def self.included(base)
    base.send :include, InstanceMethods
    base.extend ClassMethods
  end

  module InstanceMethods
    def verify_hash_digest(password)
      BCrypt::Password.new(password)
    end

    def authenticate_user(username, password, list_of_users)
      list_of_users.each do |user_record|
        if user_record[:username] == username && verify_hash_digest(user_record[:password]) == password
          return user_record
        end
      end
      'Credentials Invalid'
    end
  end

  module ClassMethods
    def create_hash_digest(password)
      BCrypt::Password.create(password)
    end

    def create_secure_passwords(users_hash_list)
      users_hash_list.each do |user|
        user[:password] = create_hash_digest(user[:password])
      end
      users_hash_list
    end
  end

  # Methods like these which are initialzed with "self" are known as "Class Methods"
  # Such methods don't need an instance of the Class to be worked with, they can simply be called upon the class
  # e.g.: UserAuthenticate.create_secure_passwords
end

# Now this module is exported and can be used in other files.
