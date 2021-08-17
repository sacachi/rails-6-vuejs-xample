# frozen_string_literal: true

class CreateCommunes < ActiveRecord::Migration[6.0]
  def change
    create_table :communes do |t|
      t.string :name
      t.integer :city_id
      t.integer :prefecture_id

      t.timestamps
    end
  end
end
