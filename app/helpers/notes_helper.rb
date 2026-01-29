module NotesHelper
  def format_timestamp(seconds)
    seconds = seconds.to_i
    mm = seconds / 60
    ss = seconds % 60
    format("%d:%02d", mm, ss)
  end
end
