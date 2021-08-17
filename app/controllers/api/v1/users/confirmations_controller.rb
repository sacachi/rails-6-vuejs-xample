class Api::V1::Users::ConfirmationsController < Devise::ConfirmationsController
  protect_from_forgery with: :null_session
  def new
    super
  end

  def create
    super
  end

  def show
    super
  end

  protected

  def after_resending_confirmation_instructions_path_for(resource_name)
    super(resource_name)
  end

  def after_confirmation_path_for(resource_name, resource)
    super(resource_name, resource)
  end
end
