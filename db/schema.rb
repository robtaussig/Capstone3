# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160806210106) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_projects", force: :cascade do |t|
    t.string   "title",            null: false
    t.text     "content"
    t.integer  "author_id",        null: false
    t.integer  "category_id"
    t.integer  "goal"
    t.string   "project_img_urls"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.text     "blurb"
    t.integer  "duration"
    t.string   "location"
    t.integer  "saved_project_id"
  end

  add_index "api_projects", ["author_id"], name: "index_api_projects_on_author_id", using: :btree
  add_index "api_projects", ["category_id"], name: "index_api_projects_on_category_id", using: :btree
  add_index "api_projects", ["title"], name: "index_api_projects_on_title", unique: true, using: :btree

  create_table "api_rewards", force: :cascade do |t|
    t.integer  "project_id",         null: false
    t.string   "title"
    t.integer  "amount"
    t.string   "description"
    t.integer  "quantity"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "project_reward_key"
  end

  add_index "api_rewards", ["project_id"], name: "index_api_rewards_on_project_id", using: :btree

  create_table "api_saved_projects", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.integer  "author_id"
    t.integer  "category_id"
    t.integer  "goal"
    t.string   "project_img_urls"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.text     "blurb"
    t.integer  "duration"
    t.string   "location"
  end

  create_table "api_sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "api_users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email"
    t.string   "pic_url"
    t.string   "home"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "api_users", ["email"], name: "index_api_users_on_email", using: :btree
  add_index "api_users", ["username"], name: "index_api_users_on_username", unique: true, using: :btree

end
