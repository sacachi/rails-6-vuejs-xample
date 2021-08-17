module Api
  module V1
    module Admins
      class ServicesController < AdminsController
        def index
          @services = @current_barber.detail_prices.includes(:service)
        end

        def update_price
          detail_price = DetailPrice.all.find_by(service_id: params[:id].to_i, barber_id: @current_barber.id)
          if detail_price.update(price: params[:service][:price])
            render json: { message: 'Cập nhật thành công。', status: :ok }
          else
            render json: { message: full_error(detail_price), status: :false }
          end
        end
      end
    end
  end
end
