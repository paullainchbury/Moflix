class CreateMusictracks < ActiveRecord::Migration
  def change
    create_table :musictracks do |t|
      t.string :type
      t.string :src
      t.references :event
      t.string :title

      t.timestamps
    end
    add_index :musictracks, :event_id
  end
end
