class Article < ApplicationRecord
# This just means that the 'title' of each article is required
  validates :title, presence: true
# This just means that the 'body' of each article is required
  validates :body, presence: true
end
