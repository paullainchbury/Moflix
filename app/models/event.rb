class Event < ActiveRecord::Base
  attr_accessible :end_time, :privacy_status, :start_time, :title
  has_many :images
  has_many :events_users
  has_many :users, through: :events_users
  has_many :status_updates
  # after_save :create_statuses_for_event

def get_cover
  self.images.reverse.first
end

def create_statuses_for_event
  if start_time
    if start_time <= Time.zone.now
      if users.any?
        users.each do |user|
          if user.statuses.any?
            user.statuses.each do |status_update|
              if (StatusUpdate.where(:fb_status_id=>status_update['id'], :event_id=>id) == [])
                if (status_update['updated_time'] >= start_time) && (status_update['updated_time'] <= end_time)
                  #For each user, get their status updates between the times of the event 
                  new_status_update = user.status_updates.create(
                    :fb_status_id=>status_update['id'],
                    :poster=>status_update['from']['name'],
                    :message=>status_update['message'],
                    :update_time=>status_update['updated_time'],
                    :event_id=>id
                    )
                  if status_update['comments'] != nil
                    new_status_update.comments_count = status_update['comments']['data'].count
                    new_status_update.save
                  end
                  if status_update['likes'] != nil
                    new_status_update.likes_count = status_update['likes']['data'].count
                    new_status_update.save
                  end
                end
              end
            end 
           end
        end
      end
    end
  end
end
    # self.status_updates.destroy_all
    #May have to change the above to be this:
    #Booking.for_course(self.id).destroy_all
    # @thestatusupdates = []
end
