class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.valid?
      user.save
      render json: { message: 'Success' }, status: :ok
    else
      render json: user.errors.messages, status: :unprocessable_entity
    end
  end

  def show
    user = User.find(show_user)
    if user.nil?
      render status: :not_found
    else
      render json: user, status: :ok
    end
  end

  def update_city
    user = User.find(params[:id])
    city = City.find(params[:city_id])
    if user.nil? || city.nil?
      render status: :not_found
    else
      user.update(city: city)
      render json: user, status: :ok
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :city_id)
  end

  def show_user
    params.require(:id)
  end
end
