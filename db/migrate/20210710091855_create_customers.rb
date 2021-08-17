class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :phone
      t.string :address
      t.integer :age
      t.integer :gender, default: 1
      t.integer :prefecture_id, index: true
      t.integer :city_id, index: true
      t.integer :commune_id, index: true

      t.timestamps
    end

    add_column :users, :customer_id, :integer, index: true
  end
end
