class ChangeColumnTypeOfImageName < ActiveRecord::Migration
  def up
    change_column :images, :name, :text
  end
  def down
    change_column :images, :name, :string
  end
end
