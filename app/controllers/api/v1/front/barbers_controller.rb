module Api
  module V1
    module Front
      class BarbersController < ApplicationController
        def index
          @barbers = Barber.all
        end

        def show
          @barber = Barber.find(params[:id])
        end

        private

        def service_params
          params.require(:service).permit(:name, :price)
        end
      end
    end
  end
end
