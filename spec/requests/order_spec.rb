require 'rails_helper'

describe 'Order page' do
  it 'loads order page successfully' do
    get '/order'
    expect(response.status).to eq(200)
  end
end