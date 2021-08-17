class Api::V1::Admins::RegistrationsController < Devise::RegistrationsController
  protect_from_forgery with: :null_session
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  def new
    super
  end

  def create
    admin = Admin.new admin_params
    if admin.save
      render json: { message: 'Đăng ký thành công', token: admin.generate_jwt, status: 'ok' }
    else
      warden.custom_failure!
      render json: { message: 'Đăng ký thất bại' }
    end
  end

  def edit
    super
  end

  def update
    super
  end

  def destroy
    super
  end

  def cancel
    super
  end

  protected

  def admin_params
    params.require(:admin).permit(:email, :password, :password_confirmation,
                                  barber_attributes: %w[name phone birth_day gender prefecture_id city_id commune_id address address])
  end

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  end

  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  end

  def after_sign_up_path_for(resource)
    super(resource)
  end

  def after_inactive_sign_up_path_for(resource)
    super(resource)
  end
end
