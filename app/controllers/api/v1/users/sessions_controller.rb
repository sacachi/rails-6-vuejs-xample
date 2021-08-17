class Api::V1::Users::SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session
  before_action :configure_sign_in_params, only: [:create]

  def new
    super
  end

  def create
    user = User.find_by_email(user_params[:email])

    if user && user.valid_password?(user_params[:password])
      render json: { token: user.generate_jwt, message: 'Đăng nhập thành công', status: 'ok' }
    else
      render json: { message: 'Email hoặc mật khẩu không đúng' }
    end
  end

  def destroy
    super
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :authentication_token)
  end

  protected

  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end
end
