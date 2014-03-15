class UsersController < ApplicationController

  def fb_albums
      @albums = current_user.fb_albums
      render json: @albums
  end

end
