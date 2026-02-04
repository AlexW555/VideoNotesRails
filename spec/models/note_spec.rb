require 'rails_helper'

RSpec.describe Note, type: :model do
  describe '#create' do
    it 'creates a note' do
      note = Note.create(body: 'Test note', timestamp_seconds: 120)
      expect(note).to be_persisted
      expect(note.body).to eq('Test note')
      expect(note.timestamp_seconds).to eq(120)
    end
  end
end
