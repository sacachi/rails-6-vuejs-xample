class CreateServiceCharges < ActiveRecord::Migration[6.1]
  def change
    create_table :service_charges do |t|
      t.string :name
      t.integer :price
      t.timestamps
    end
  end
end
