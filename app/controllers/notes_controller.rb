class NotesController < ApplicationController
  def create
    @note = Note.new(note_params)
    @notes = Note.order(created_at: :desc)

    if @note.save
        respond_to do |format|
            format.turbo_stream
            format.html { redirect_to video_path, notice: "Note saved" }
        end
    else
        respond_to do |format|
            format.turbo_stream { render :create, status: :unprocessable_entity }
            format.html { render "video/show", status: :unprocessable_entity }
        end
    end
end

private 

def note_params
    params.require(:note).permit(:body, :timestamp_seconds)
end
end
