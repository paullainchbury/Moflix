class AddFromidToImages < ActiveRecord::Migration
  def change
    add_column :images, :fromid, :string
  end
end
