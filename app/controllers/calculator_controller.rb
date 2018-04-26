class CalculatorController < ApplicationController
    skip_before_action :verify_authenticity_token, raise: false

    def index
      # to prevent confusing user behaviour
      redirect_to '/'
    end
    
    def create
      # values used in calculations, view readme for full explanation
      base_amount = params[:base].to_f
      monthly_deposit = params[:deposit].to_f
      interest_rate = (params[:interest].to_f / 12) / 100 
      # 12 = compounded mounthly
      # 100 = to convert percentage into usuable amount
      calculation_period = params[:period].to_f
      months = (calculation_period * 12)

      monthlyTotals = []

      0.upto(months) { |month|
        if month == 0
          monthlyTotals.push(base_amount.round(2))
          # month 0 no interest or deposits are taken into consideration
        else
          monthlyTotals.push(((monthlyTotals[month - 1] + monthly_deposit) * (1 + interest_rate)).round(2))
          # month > 0
          # deposit is added, before compounded amount is calculated
        end
      }

      render json: monthlyTotals
    end
end