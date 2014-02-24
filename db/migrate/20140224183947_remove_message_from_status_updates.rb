class RemoveMessageFromStatusUpdates < ActiveRecord::Migration
  def change
    remove_column :status_updates, :message
    add_column :status_updates, :message, :text
  end
end
