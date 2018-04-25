class CalculatorController < ApplicationController
    skip_before_action :verify_authenticity_token, raise: false

    def index
      redirect_to '/'
    end
    
    def create
      base_amount = params[:base].to_f
      monthly_deposit = params[:deposit].to_f
      interest_rate = (params[:interest].to_f / 12) / 100
      calculation_period = params[:period].to_f
      months = (calculation_period * 12)

      monthlyTotals = []

      0.upto(months) { |month|
        if month == 0
          monthlyTotals.push(base_amount.round(2))
        else
          monthlyTotals.push(((monthlyTotals[month - 1] + monthly_deposit) * (1 + interest_rate)).round(2))
        end
      }

      render json: monthlyTotals
    end
end