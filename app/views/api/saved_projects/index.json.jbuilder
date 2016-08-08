json.array! @saved_projects do |project|
  json.id project.id
  json.title project.title
  json.content project.content
  json.blurb project.blurb
  json.author_id project.author_id
  json.category_id project.category_id
  json.goal project.goal
  json.duration project.duration
  json.location project.location
  json.risks project.risks
  json.due_date project.project_due_date
  json.project_imgs project.project_img_urls
end

:id, :title, :content, :author_id, :category_id,
:goal, :duration, :location, :blurb, :project_img_urls, :risks
