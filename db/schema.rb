# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140326211721) do

  create_table "events", :force => true do |t|
    t.string   "title"
    t.datetime "start_time"
    t.datetime "end_time"
    t.string   "privacy_status"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.string   "song"
  end

  create_table "events_users", :force => true do |t|
    t.integer  "event_id"
    t.integer  "user_id"
    t.string   "user_type"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "events_users", ["event_id"], :name => "index_events_users_on_event_id"
  add_index "events_users", ["user_id"], :name => "index_events_users_on_user_id"

  create_table "fbcomments", :force => true do |t|
    t.string   "fb_created_time"
    t.string   "from_id"
    t.string   "from_name"
    t.integer  "like_count"
    t.boolean  "user_likes"
    t.string   "message"
    t.integer  "image_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "picture"
  end

  add_index "fbcomments", ["image_id"], :name => "index_fbcomments_on_image_id"

  create_table "images", :force => true do |t|
    t.string   "fb_id"
    t.string   "fb_created_time"
    t.integer  "height"
    t.integer  "width"
    t.string   "source"
    t.string   "from"
    t.integer  "event_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "name"
    t.string   "fromid"
    t.string   "frompic"
  end

  add_index "images", ["event_id"], :name => "index_images_on_event_id"

  create_table "musictracks", :force => true do |t|
    t.string   "tracktype"
    t.string   "src"
    t.integer  "event_id"
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "musictracks", ["event_id"], :name => "index_musictracks_on_event_id"

  create_table "status_updates", :force => true do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.datetime "update_time"
    t.string   "location"
    t.text     "content"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.string   "fb_status_id"
    t.string   "poster"
    t.integer  "comments_count"
    t.integer  "likes_count"
    t.text     "message"
  end

  add_index "status_updates", ["event_id"], :name => "index_status_updates_on_event_id"
  add_index "status_updates", ["user_id"], :name => "index_status_updates_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0,  :null => false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.string   "image"
    t.string   "facebook_token"
    t.string   "email",                  :default => "", :null => false
  end

  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
