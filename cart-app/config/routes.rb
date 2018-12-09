Rails.application.routes.draw do
  namespace :admin do
    resources :products
    root to: 'products#index'
  end

  get 'store', to: 'store#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'admin/products#index'
end
