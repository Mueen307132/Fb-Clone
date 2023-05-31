Rails.application.routes.draw do
  resources :posts do
  resources :comments
  resources :likes
  end
  devise_for :users
  root "posts#index" 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
