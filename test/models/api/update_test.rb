# == Schema Information
#
# Table name: api_updates
#
#  id          :integer          not null, primary key
#  campaign_id :integer          not null
#  body        :string           not null
#  title       :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class Api::UpdateTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
