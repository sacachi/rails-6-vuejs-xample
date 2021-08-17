module Api
  module V1
    module SuperAdmins
      class BookingsController < SuperAdminsController
        def index
          @bookings = if params[:status].blank?
                        Booking.all.order(created_at: :desc).page(params[:page]).per(params[:per_page])
                      else
                        Booking.where(status: params[:status]).order(created_at: :desc).page(params[:page]).per(params[:per_page])
                      end
          @total = @bookings.total_count
        end

        def create
          @booking = Booking.new(booking_params)
          if @booking.save
            render json: { status: 'ok', message: 'Bạn đã thêm thành công', type: 'success' }
          else
            render json: { status: 'fail', message: full_error(@booking.errors), type: 'error' }
          end
        end

        def update
          @booking = Booking.find(params[:id])
          if @booking.update(booking_params)
            render json: { message: 'Cập nhật thành công。', status: :ok }
          else
            render json: { message: full_error(@booking), status: :false }
          end
        end

        def destroy
          @booking = Booking.find(params[:id])
          @booking.destroy
          render json: { message: 'Xoá thành công。', status: :ok }
        end

        private

        def booking_params
          params.require(:booking).permit(:name, :phone, :address, :gender, :age, :commune_id, :prefecture_id, :city_id)
        end
      end
    end
  end
end
