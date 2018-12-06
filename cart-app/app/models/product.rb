class Product < ApplicationRecord
  validates :title, :price, :description, :image_url, presence: true
  validates_numericality_of :price
end
