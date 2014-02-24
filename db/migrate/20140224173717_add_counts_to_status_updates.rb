class AddCountsToStatusUpdates < ActiveRecord::Migration
  def change
    add_column :status_updates, :comments_count, :integer
    add_column :status_updates, :likes_count, :integer
  end
end
