require 'test_helper'

class CalculatorControllerTest < ActionDispatch::IntegrationTest
  test "index url should redirect" do
    get calculator_index_url
    assert_redirected_to '/'
  end
end
