class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.find_for_facebook_oauth(request.env["omniauth.auth"])
    @user.facebook_token = request.env['omniauth.auth']['credentials']['token']
    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def instagram
    if current_user
      current_user.instagram_token = request.env["omniauth.auth"]["credentials"]["token"]
      current_user.instagram_uid = request.env["omniauth.auth"]["uid"]
      current_user.save
      redirect_to new_event_url
    else
      # You need to implement the method below in your model (e.g. app/models/user.rb)
      @user = User.find_for_instagram_oauth(request.env["omniauth.auth"])
      @user.instagram_token = request.env['omniauth.auth']['credentials']['token']
      if @user.persisted?
        sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
        set_flash_message(:notice, :success, :kind => "Instagram") if is_navigational_format?
      else
        session["devise.instagram_data"] = request.env["omniauth.auth"]
        redirect_to new_user_registration_url
      end
    end
  end


end