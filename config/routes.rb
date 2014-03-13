TodoAppBbRails::Application.routes.draw do
  root 'home#main'
  resources :todos
end
