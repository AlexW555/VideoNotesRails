class VideoController < ApplicationController
    def show
        @note  = Note.new
        @notes = Note.order(created_at: :desc)
    end
end