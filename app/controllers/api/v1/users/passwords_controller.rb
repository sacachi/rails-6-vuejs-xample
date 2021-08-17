class Api::V1::Users::PasswordsController < Devise::PasswordsController
  protect_from_forgery with: :null_session
  def new
    super
  end

  def create
    super
  end

  def edit
    super
  end

  def update
    super
  end

  protected

  def after_resetting_password_path_for(resource)
    super(resource)
  end

  def after_sending_reset_password_instructions_path_for(resource_name)
    super(resource_name)
  end
end
