class ChangeColumnTypeOfFbcommentName < ActiveRecord::Migration
  def up
    change_column :fbcomments, :message, :text
  end
  def down
    change_column :fbcomments, :message, :string
  end
end
