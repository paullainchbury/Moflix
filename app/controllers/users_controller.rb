class UsersController < ApplicationController

  def fb_albums
      @albums = current_user.fb_albums
      render json: @albums
  end

  def fb_friends_albums
      @albums = current_user.fb_albums(params['userid'])
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

  def fb_friends
      @friends = current_user.get_fb_friends
      render json: @friends
  end

end
