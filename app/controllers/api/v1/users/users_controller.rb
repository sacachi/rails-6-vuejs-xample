class Api::V1::Users::UsersController < UsersController
  def show
    render json: { message: 'success' }
  end

  def update
    if current_user.update_attributes(user_params)
      render json: { message: 'success' }
    else
      render json: { errors: current_user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
