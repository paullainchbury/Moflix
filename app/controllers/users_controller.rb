class UsersController < ApplicationController

  def fb_albums
      @albums = current_user.fb_albums
      render json: @albums
  end

  def fb_picture
      @picture  = current_user.fb_get_photo(params['pictureid'])
      render json: @picture
  end

  def fb_album
      @album  = current_user.fb_photos_by_album(params['albumid']).reverse
      render json: @album
  end

end
