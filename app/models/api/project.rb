# == Schema Information
#
# Table name: api_projects
#
#  id                           :integer          not null, primary key
#  title                        :string           not null
#  content                      :text
#  author_id                    :integer          not null
#  category_id                  :integer
#  goal                         :integer
#  project_img_urls             :string
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  blurb                        :text
#  duration                     :integer
#  location                     :string
#  saved_project_id             :integer
#  author_full_name             :string
#  website                      :string
#  risks                        :text
#  image                        :string
#  project_picture_file_name    :string
#  project_picture_content_type :string
#  project_picture_file_size    :integer
#  project_picture_updated_at   :datetime
#  image_file_name              :string
#  image_content_type           :string
#  image_file_size              :integer
#  image_updated_at             :datetime
#

class Api::Project < ActiveRecord::Base

  validates :title, :author_id, presence: true
  has_attached_file :image, default_url: "/assets/default_pic.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author, class_name: 'User', foreign_key: 'author_id'
  belongs_to :saved_project, class_name: 'SavedProject', foreign_key: 'saved_project_id'
  has_many :rewards, through: :saved_project
  has_many :fundings, through: :rewards
  has_many :funders, through: :fundings, source: :user
  has_many :comments, foreign_key: 'campaign_id'

end
