class Image < ActiveRecord::Base
  belongs_to :event
  has_many :fbcomments
  attr_accessible :fb_created_time, :fb_id, :from, :height, :source, :width
end
