module Api
  module V1
    module SuperAdmins
      class ServiceChargesController < ApplicationController
        def index
          @service_charges = ServiceCharge.all
        end

        def create
          @service_charge = ServiceCharge.new(service_charge_params)
          if @service_charge.save
            render json: { status: 'ok', message: 'Bạn đã thêm dịch vụ thành công', type: 'success' }
          else
            render json: { status: 'fail', message: full_error(@service_charge.errors), type: 'error' }
          end
        end

        def update
          @service_charge = ServiceCharge.find(params[:id])
          if @service_charge.update(service_charge_params)
            render json: { message: 'Cập nhật thành công。', status: :ok }
          else
            render json: { message: full_error(@service_charge), status: :false }
          end
        end

        def destroy
          @service_charge = ServiceCharge.find(params[:id])
          @service_charge.destroy
          render json: { message: 'Xoá dịch vụ thành công。', status: :ok }
        end

        private

        def service_charge_params
          params.require(:service_charge).permit(:name, :price)
        end
      end
    end
  end
end
