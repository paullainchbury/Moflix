class Event < ActiveRecord::Base
  attr_accessible :end_time, :privacy_status, :start_time, :title
  has_many :events_users
  has_many :users, through: :events_users
end
