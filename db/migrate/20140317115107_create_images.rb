class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :fb_id
      t.string :fb_created_time
      t.integer :height
      t.integer :width
      t.string :source
      t.string :from
      t.references :event

      t.timestamps
    end
    add_index :images, :event_id
  end
end
