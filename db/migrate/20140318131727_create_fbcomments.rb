class CreateFbcomments < ActiveRecord::Migration
  def change
    create_table :fbcomments do |t|
      t.string :fb_created_time
      t.string :from_id
      t.string :from_name
      t.integer :like_count
      t.boolean :user_likes
      t.string :message
      t.references :image

      t.timestamps
    end
    add_index :fbcomments, :image_id
  end
end
