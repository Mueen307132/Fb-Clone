class AddRepliesToComments < ActiveRecord::Migration[7.0]
  def change
    add_reference :comments, :comment, foreign_key: { to_table: :comments }
    rename_column :comments, :comment, :body
  end
end
