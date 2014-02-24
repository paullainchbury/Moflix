class AddFbStatusIdToStatusUpdates < ActiveRecord::Migration
  def change
    add_column :status_updates, :fb_status_id, :string
  end
end
