class User < ActiveRecord::Base
  has_many :status_updates
  has_many :events_users
  has_many :events, through: :events_users
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :email, :password, :password_confirmation, :remember_me, :uid, :provider, :facebook_token, :image

  def self.find_for_facebook_oauth(auth)
  where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name
      user.image = auth.info.image # assuming the user model has an image
    end
end

def facebook_details
  @facebook_details ||= Koala::Facebook::API.new(facebook_token)
end

end
