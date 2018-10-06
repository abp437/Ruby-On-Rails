class User < ApplicationRecord
  validates :username, length: { maximum: 10 }, uniqueness: true, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP },
                    uniqueness: true, presence: true
  validates :password, presence: true
  belongs_to :city
end
