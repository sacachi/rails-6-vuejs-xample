class AddDeletedAtToBarber < ActiveRecord::Migration[6.1]
  def change
    add_column :barbers, :deleted_at, :datetime
  end
end
