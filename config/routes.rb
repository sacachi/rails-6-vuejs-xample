Rails.application.routes.draw do
  root 'home#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      namespace :super_admins do
        resources :bookings, only: %w[index show create update destroy]
        resources :services, only: %w[index show create update destroy]
        resources :barbers, only: %w[index show create update destroy]
        resources :dashboards, only: %w[index] do
          collection do
            get :total_revenues
            get :total_bookings
          end
        end
        resources :service_charges, only: %w[index show create update destroy]
      end

      namespace :users do
        resources :users
      end

      namespace :admins do
        resources :dashboards, only: %w[index] do
          collection do
            get :total_revenues
            get :total_bookings
          end
        end
        resources :info_admins
        resources :services do
          member do
            post :update_price
          end
        end
        resources :bookings, only: %w[index]
      end

      namespace :front do
        resources :prefectures, only: %w[index show] do
          member do
            get :barbers
          end
        end
        resources :cities, only: %w[index show] do
          member do
            get :barbers
          end
        end
        resources :services, only: %w[index show]
        resources :barbers, only: %w[index show]
        resources :bookings do
          member do
            post :update_status
          end
        end
        resources :service_charges, only: :index
      end
    end
  end
  devise_for :users, path: '/api/v1/users', path_names: { sign_in: 'login', sign_out: 'logout', registration: 'signup' },
                     controllers: {
                       sessions: 'api/v1/users/sessions',
                       registrations: 'api/v1/users/registrations'
                     }
  devise_for :admins, path: '/api/v1/admins', path_names: { sign_in: 'login', sign_out: 'logout', registration: 'signup' },
                      controllers: {
                        sessions: 'api/v1/admins/sessions',
                        registrations: 'api/v1/admins/registrations'
                      }
  devise_for :super_admins, path: '/api/v1/super_admins', path_names: { sign_in: 'login', sign_out: 'logout' },
                            controllers: {
                              sessions: 'api/v1/super_admins/sessions'
                            }
  match '/super_admins/*path', to: 'super_admins#home', format: false, via: :get
  match '/admins/*path', to: 'admins#home', format: false, via: :get
  match '/users/*path', to: 'users#home', format: false, via: :get
  match '/*path', to: 'home#index', format: false, via: :get
end
