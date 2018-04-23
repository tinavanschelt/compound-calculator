class CalculatorController < ApplicationController
    skip_before_action :verify_authenticity_token, raise: false
    
    def create
      base_amount = params[:base].to_f
      monthly_deposit = params[:deposit].to_f
      interest_rate = params[:interest].to_f / 100
      calculation_period = params[:period].to_f
      months = calculation_period * 12
      puts interest_rate

      lala = []

      1.upto(months) { |month| 
        if month == 1
          # P(1 + i)
          lala.push(base_amount * (1 + interest_rate))
        else
          lala.push((base_amount * (1 + interest_rate)) * month)
        end
      }

      render json: lala
    end
end