class StatusUpdate < ActiveRecord::Base
  belongs_to :user
  belongs_to :event
  attr_accessible :content, :location, :update_time, :fb_status_id, :event_id, :location, :poster, :message, :comments_count, :likes_count

  default_scope order('update_time DESC')

end

