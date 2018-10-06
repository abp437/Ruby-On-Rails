class ApplicationController < ActionController::API
  def index
    render json: User.all
  end
end
