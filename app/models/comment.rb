class Comment < ApplicationRecord
      belongs_to :commentable, polymorphic: true
      belongs_to :user
      has_many :likes, as: :likeable
      validates :body, presence:true
      has_many :replies, class_name: "Comment", foreign_key: "comment_id"
      belongs_to :comment, class_name: "Comment", optional: true
end
