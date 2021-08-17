class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :customer_id, index: true
      t.integer :total
      t.integer :barber_id, index: true

      t.timestamps
    end
  end
end
