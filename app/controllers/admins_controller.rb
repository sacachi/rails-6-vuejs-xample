class AdminsController < ApplicationController
  before_action :authenticate_admin

  def home
    render template: 'layouts/admins'
  end

  def authenticate_admin
    if request.headers['Authorization'].present?
      authenticate_or_request_with_http_token do |token|
        jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first
        @current_admin = Admin.find(jwt_payload['id'])
        @current_barber = @current_admin.barber
      rescue StandardError
        head :unauthorized
      end
    end
  end
end
