module Api
  module V1
    module SuperAdmins
      class DashboardsController < SuperAdminsController
        def total_revenues
          @months = (1..Time.current.month).to_a
          @bookings = Booking.where('created_at >= ?', Time.current.beginning_of_year)
          @revenues = refactor_data_revenues(@bookings.group_by { |m| m.created_at.month })
        end

        def total_bookings
          @months = (1..Time.current.month).to_a
          @bookings = Booking.where('created_at >= ?', Time.current.beginning_of_year)
          if @bookings
            @bookings_new = refactor_data(@bookings.where(status: 'new')
                                                   .group_by { |m| m.created_at.month })
            @bookings_completed = refactor_data(@bookings.where(status: 'completed')
                                                         .group_by { |m| m.created_at.month })
            @bookings_canceled = refactor_data(@bookings.where(status: 'canceled')
                                                        .group_by { |m| m.created_at.month })

          end
        end

        private

        def refactor_data(data)
          @months.each do |month|
            data[month] = if data.keys.include? month
                            data[month].map { |e| e.detail['total'] }.count
                          else
                            0
                          end
          end
          Hash[data.sort_by { |k, _v| k }]
        end

        def refactor_data_revenues(data)
          @months.each do |month|
            data[month] = if data.keys.include? month
                            data[month].map { |e| e.detail['total'] }.sum
                          else
                            0
                          end
          end
          Hash[data.sort_by { |k, _v| k }]
        end
      end
    end
  end
end
