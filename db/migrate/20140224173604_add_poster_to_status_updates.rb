class AddPosterToStatusUpdates < ActiveRecord::Migration
  def change
    add_column :status_updates, :poster, :string
  end
end
