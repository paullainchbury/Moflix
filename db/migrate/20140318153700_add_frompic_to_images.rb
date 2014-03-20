class AddFrompicToImages < ActiveRecord::Migration
  def change
    add_column :images, :frompic, :string
  end
end
