class RemoveEmailFromUsers < ActiveRecord::Migration
  def up
    remove_column :users, :email
    add_column :users, :email, :string
  end

  def down
  end
end
