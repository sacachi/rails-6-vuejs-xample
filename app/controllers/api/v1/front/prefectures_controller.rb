# frozen_string_literal: true

module Api
  module V1
    module Front
      class PrefecturesController < ApplicationController
        def index
          @prefectures = Prefecture.all
        end

        def show
          prefecture = Prefecture.find(params[:id])
          @cities = prefecture.cities
        end

        def barbers
          prefecture = Prefecture.find(params[:id])
          @barbers = prefecture.barbers
        end
      end
    end
  end
end
