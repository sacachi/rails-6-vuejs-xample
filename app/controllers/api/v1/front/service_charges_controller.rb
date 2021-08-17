module Api
  module V1
    module Front
      class ServiceChargesController < ApplicationController
        def index
          @service_charges = ServiceCharge.all
        end
      end
    end
  end
end
