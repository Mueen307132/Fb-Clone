class Post < ApplicationRecord
  paginates_per 5
  belongs_to :user
  has_one_attached :image
  has_many :comments, as: :commentable
  has_many :likes, as: :likeable
  validates :image, presence: true
  validates :body, presence: true
end
