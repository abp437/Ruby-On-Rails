class CitiesController < ApplicationController
  def index
    render json: City.all
  end

  def create
    city = City.new(city_params)
    if city.valid?
      city.save
      render json: { status: 'SUCCESS' }, status: :ok
    else
      render json: city.error.messages, status: :unprocessable_entity
    end
  end

  private

  def city_params
    params.require(:city).permit(:city_name)
  end
end
