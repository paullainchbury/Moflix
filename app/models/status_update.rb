class StatusUpdate < ActiveRecord::Base
  belongs_to :user
  belongs_to :event
  attr_accessible :content, :location, :update_time
end
