# frozen_string_literal: true

require 'rails_helper'

describe 'Home page' do
  it 'loads home page successfully' do
    get '/'
    expect(response.status).to eq(200)
  end

  it 'redirects when searching for /home' do
    get '/home'
    expect(response.status).to eq(301)
  end
end
