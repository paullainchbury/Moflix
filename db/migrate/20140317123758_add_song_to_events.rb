class AddSongToEvents < ActiveRecord::Migration
  def change
    add_column :events, :song, :string
  end
end
