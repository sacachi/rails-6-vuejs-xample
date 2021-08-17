class Api::V1::Admins::SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session
  before_action :configure_sign_in_params, only: [:create]

  def new
    super
  end

  def create
    admin = Admin.find_by_email(admin_params[:email])

    if admin && admin.valid_password?(admin_params[:password])
      render json: { token: admin.generate_jwt, message: 'Đăng nhập thành công', status: 'ok' }
    else
      render json: { message: 'Email hoặc mật khẩu không đúng' }
    end
  end

  def destroy
    super
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password, :authentication_token)
  end

  protected

  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end
end
