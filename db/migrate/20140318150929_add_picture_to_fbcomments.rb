class AddPictureToFbcomments < ActiveRecord::Migration
  def change
    add_column :fbcomments, :picture, :string
  end
end
