class AddCameFromSiteToFbcomments < ActiveRecord::Migration
  def change
    add_column :fbcomments, :came_from_site, :string
  end
end
