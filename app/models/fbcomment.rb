class Fbcomment < ActiveRecord::Base
  belongs_to :image
  attr_accessible :fb_created_time, :from_id, :from_name, :like_count, :message, :user_likes
end
