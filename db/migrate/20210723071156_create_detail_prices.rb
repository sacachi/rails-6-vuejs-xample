class CreateDetailPrices < ActiveRecord::Migration[6.1]
  def change
    create_table :detail_prices do |t|
      t.integer :service_id, index: true
      t.integer :barber_id, index: true
      t.integer :price
      t.timestamps
    end
  end
end
