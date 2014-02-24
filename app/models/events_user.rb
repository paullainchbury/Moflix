class EventsUser < ActiveRecord::Base
  belongs_to :event
  belongs_to :user
  attr_accessible :user_type, :event, :user
end
