# frozen_string_literal: true

module Api
  module V1
    module Front
      class CitiesController < ApplicationController
        def show
          city = City.find(params[:id])
          @communes = city.communes
        end

        def barbers
          city = City.find(params[:id])
          @barbers = city.barbers
        end
      end
    end
  end
end
