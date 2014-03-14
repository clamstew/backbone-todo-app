TodoAppBbRails::Application.routes.draw do
  root 'home#main'
  scope :api do
    resources :todos
  end
end
