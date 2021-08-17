module Api
  module V1
    module Front
      class BookingsController < ApplicationController
        def index
          @bookings = Booking.all
        end

        def update_status
          @booking = Booking.find_by(id: params[:id])
          if @booking.update(status: params[:status])
            render json: { status: 'oke', message: 'Bạn đã cập nhật thành công' }
          else
            render json: { status: 'fail', message: 'Đã có lỗi xảy ra' }
          end
        end

        def create
          booking = Booking.new booking_params
          booking.detail = params[:booking][:detail]
          if booking.save
            render json: { message: 'Bạn đã đăng ký thành công', status: 'ok' }
          else
            render json: { message: 'Đăng ký thất bại', status: 'fail' }
          end
        end

        private

        def booking_params
          params.require(:booking).permit(:barber_id, customer_attributes: %i[id
                                                                              name phone prefecture_id city_id commune_id
                                                                              gender address], service_ids: [])
        end
      end
    end
  end
end
