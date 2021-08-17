module Api
  module V1
    module Admins
      class BookingsController < AdminsController
        def index
          @bookings = if params[:status].blank?
                        @current_barber.bookings.order(created_at: :desc).page(params[:page]).per(params[:per_page])
                      else
                        @current_barber.barber.bookings.where(status: params[:status]).order(created_at: :desc).page(params[:page]).per(params[:per_page])
                      end
          @total = @bookings.total_count
        end
      end
    end
  end
end
