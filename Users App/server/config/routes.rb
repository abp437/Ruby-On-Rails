Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: %i[index create show] do
    member do
      # /users/:id/update_city
      put :update_city
    end
  end

  resources :cities, only: %i[index create] do
  end
end
