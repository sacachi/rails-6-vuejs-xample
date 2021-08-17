module Api
  module V1
    module Front
      class ServicesController < ApplicationController
        def index
          @services = Service.all
        end

        private

        def service_params
          params.require(:service).permit(:name, :price)
        end
      end
    end
  end
end
