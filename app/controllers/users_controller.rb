class UsersController < ApplicationController

  def fb_albums
      @albums = current_user.fb_albums
      render json: @albums
  end

  def fb_picture
      @picture  = current_user.fb_get_photo(params['pictureid'])
      render json: @picture
  end

end
