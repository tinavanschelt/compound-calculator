Rails.application.routes.draw do
  
  root 'home#index'
  # get 'calculator/create', to: 'calculator#create'
  resources :calculator
  get 'calculator', to: redirect('/')
  get 'styleguide', to: 'styleguide#index'

end
