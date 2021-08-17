module Api
  module V1
    module SuperAdmins
      class BarbersController < SuperAdminsController
        def index
          @barbers = Barber.includes(:prefecture, :city, :commune, :admin)
                           .all.order(created_at: :desc).page(params[:page]).per(params[:per_page])
        end

        def create
          @barber = Barber.new(barber_params)
          @barber.admin.password = '12345678'
          if @barber.save
            render json: { status: 'ok', message: 'Bạn đã thêm thành công', type: 'success' }
          else
            render json: { status: 'fail', message: full_error(@barber.errors), type: 'error' }
          end
        end

        def update
          @barber = Barber.find(params[:id])
          if @barber.update(barber_params)
            render json: { message: 'Cập nhật thành công。', status: :ok }
          else
            render json: { message: full_error(@barber), status: :false }
          end
        end

        def destroy
          @barber = Barber.find(params[:id])
          @barber.destroy
          render json: { message: 'Xoá thành công', status: :ok }
        end

        private

        def barber_params
          params.require(:barber).permit(:name, :phone, :address, :gender, :commune_id, :prefecture_id, :city_id,
                                         :birth_day, admin_attributes: %i[id email])
        end
      end
    end
  end
end
