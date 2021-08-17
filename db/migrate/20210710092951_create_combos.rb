class CreateCombos < ActiveRecord::Migration[6.1]
  def change
    create_table :combos do |t|
      t.integer :service_id, index: true
      t.integer :booking_id, index: true

      t.timestamps
    end
  end
end
