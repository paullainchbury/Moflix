class CreateEventsUsersJoinTable < ActiveRecord::Migration
 def change

    create_table :events_users do |t|
      t.references :event
      t.references :user
      t.string :user_type
      t.timestamps
    end

  end
end
