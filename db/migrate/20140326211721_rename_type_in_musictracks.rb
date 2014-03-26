class RenameTypeInMusictracks < ActiveRecord::Migration
  def change
    rename_column :musictracks, :type, :tracktype
  end
end
