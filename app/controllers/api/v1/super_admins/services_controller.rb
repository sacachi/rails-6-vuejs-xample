module Api
  module V1
    module SuperAdmins
      class ServicesController < SuperAdminsController
        def index
          @services = Service.all
        end

        def create
          @service = Service.new(service_params)
          if @service.save
            render json: { status: 'ok', message: 'Bạn đã thêm dịch vụ thành công', type: 'success' }
          else
            render json: { status: 'fail', message: full_error(@service.errors), type: 'error' }
          end
        end

        def update
          @service = Service.find(params[:id])
          if @service.update(service_params)
            render json: { message: 'Cập nhật thành công。', status: :ok }
          else
            render json: { message: full_error(@service), status: :false }
          end
        end

        def destroy
          @service = Service.find(params[:id])
          @service.destroy
          render json: { message: 'Xoá dịch vụ thành công。', status: :ok }
        end

        private

        def service_params
          params.require(:service).permit(:name, :price)
        end
      end
    end
  end
end
