# frozen_string_literal: true

# applicationMailer
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
