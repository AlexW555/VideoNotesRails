class CreateNotes < ActiveRecord::Migration[8.1]
  def change
    create_table :notes do |t|
      create_table :notes do |t|
      t.text :body, null: false
      t.integer :timestamp_seconds, null: false

      t.timestamps
    end

    add_index :notes, :timestamp_seconds
    add_index :notes, :created_at
    end
  end
end
