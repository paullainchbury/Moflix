class AddMessageToStatusUpdates < ActiveRecord::Migration
  def change
    add_column :status_updates, :message, :string
  end
end
