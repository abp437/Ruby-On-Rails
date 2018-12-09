class Product < ApplicationRecord
  before_save :add_current_timestamp
  validates :title, :price, :description, :image_url, presence: true
  validates_numericality_of :price

  def add_current_timestamp
    self.date_available = Time.now
  end
end
