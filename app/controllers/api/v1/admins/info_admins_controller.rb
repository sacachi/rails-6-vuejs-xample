class Api::V1::Admins::InfoAdminsController < AdminsController
  def show
    render json: { message: 'success' }
  end

  def update
    if current_admin.update_attributes(admin_params)
      render json: { message: 'success' }
    else
      render json: { errors: current_admin.errors }, status: :unprocessable_entity
    end
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password)
  end
end
