class AddDetailToBooking < ActiveRecord::Migration[6.1]
  def change
    add_column :bookings, :detail, :json
    remove_column :bookings, :total, :integer
  end
end
