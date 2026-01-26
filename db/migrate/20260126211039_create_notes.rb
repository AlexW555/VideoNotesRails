class CreateNotes < ActiveRecord::Migration[8.1]
  def change
    create_table :notes do |t|
      t.text :body
      t.integer :timestamp_seconds

      t.timestamps
    end
  end
end
