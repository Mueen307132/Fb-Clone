class User < ApplicationRecord
  has_one_attached :avatar
  has_many :posts
  has_many :comments, as: :commentable
  has_many :likes, as: :likeable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
end
