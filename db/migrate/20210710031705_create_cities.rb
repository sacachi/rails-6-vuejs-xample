# frozen_string_literal: true

class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.integer :prefecture_id

      t.timestamps
    end
  end
end
