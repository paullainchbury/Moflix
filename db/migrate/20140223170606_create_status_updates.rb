class CreateStatusUpdates < ActiveRecord::Migration
  def change
    create_table :status_updates do |t|
      t.references :user
      t.references :event
      t.datetime :update_time
      t.string :location
      t.text :content

      t.timestamps
    end
    add_index :status_updates, :user_id
    add_index :status_updates, :event_id
  end
end
