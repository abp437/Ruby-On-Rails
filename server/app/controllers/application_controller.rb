class ApplicationController < ActionController::API
  def index
    render json: User.all
  end

  before_action :authenticate_request
  attr_reader :current_user

  protected

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
