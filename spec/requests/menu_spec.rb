require 'rails_helper'

describe 'Menu page' do
  it 'loads menu page successfully' do
    get '/menu'
    expect(response.status).to eq(200)
  end
end