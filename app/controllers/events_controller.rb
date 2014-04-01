class EventsController < ApplicationController
  # GET /events
  # GET /events.json
  def index
    @events = Event.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @events }
    end
  end

  def anothershow
  end

  def showdev
  end

  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/new
  # GET /events/new.json
  def new
    if !current_user
      redirect_to login_url
    else
      @event = Event.new
      @musictracks = Musictrack.all
      respond_to do |format|
        format.html # new.html.erb
        format.json { render json: @event }
      end
    end
  end

  # GET /events/1/edit
  def edit
    @event = Event.find(params[:id])
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new()
    @event.title = params['event']['title']

    if params['event']['musictrack']
      @event.musictracks << Musictrack.find( params['event']['musictrack'] )
    end

    # Put the photos for the event into the dB
    params['event']['photos'].each do |photo|
      photoobject = @event.images.build
      photoobject.fb_id = photo[1]["id"]
      photoobject.fb_created_time = photo[1]["created"]
      photoobject.height = photo[1]["height"]
      photoobject.width = photo[1]["width"]
      photoobject.source = photo[1]["source"]
      photoobject.from = photo[1]["from"]
      photoobject.fromid = photo[1]["fromid"]
      photoobject.name = photo[1]["name"]
      if photo[1]["cameFromSite"] == "Facebook"
        photoobject.frompic = current_user.get_profile_pic(photoobject.fromid)
        if photo[1]["comments"] 
          comments = photo[1]["comments"]["data"]
          comments.each do |comment|
            commentobject = photoobject.fbcomments.build
            commentobject.fb_created_time = comment[1]['created_time']
            commentobject.like_count = comment[1]['like_count']
            commentobject.user_likes = comment[1]['user_likes']
            commentobject.message = comment[1]['message']
            commentobject.from_name = comment[1]['from']['name']
            commentobject.from_id = comment[1]['from']['id']
            commentobject.picture = current_user.get_profile_pic(comment[1]['from']['id'])
        end #end each comment
      end #end if comments
      end #end if came came from Facebook
      if photo[1]["cameFromSite"] == "Instagram"
        photoobject.frompic = photo[1]["frompic"]
        if photo[1]["comments"]["count"] != "0"
          comments = photo[1]["comments"]["data"]
          comments.each do |comment|
            commentobject = photoobject.fbcomments.build
            commentobject.fb_created_time = comment[1]['created_time']
            # commentobject.like_count = comment[1]['like_count']
            # commentobject.user_likes = comment[1]['user_likes']
            commentobject.message = comment[1]['text']
            commentobject.from_name = comment[1]['from']['full_name']
            commentobject.from_id = comment[1]['from']['id']
            commentobject.picture = comment[1]['from']['profile_picture']
            commentobject.came_from_site = photo[1]["cameFromSite"]
          end #end each comment
        end #end if comments
      end
      

    end #end each photo


    # Set the event organiser
    @event.events_users.build(event: @event, user: current_user, user_type: "organiser")
    # TODO Then loop through the other users to assign them to the event also (although not as organisers)

    respond_to do |format|
      if @event.save
        # format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render json: @event, status: :created, location: @event }
      else
        # format.html { render action: "new" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /events/1
  # PUT /events/1.json
  def update
    @event = Event.find(params[:id])

    respond_to do |format|
      if @event.update_attributes(params[:event])
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end

end
