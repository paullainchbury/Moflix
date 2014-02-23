class Event < ActiveRecord::Base
  attr_accessible :end_time, :privacy_status, :start_time, :title
end
