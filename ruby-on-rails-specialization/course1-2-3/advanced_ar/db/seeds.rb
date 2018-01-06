# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Person.destroy_all

Person.create! [
	{first_name: "Kalman", last_name: "Swanson", age: 33, login: "kman", pass: "123"},
	{first_name: "Peter", last_name: "Kanda", age: 31, login: "kman", pass: "123"},
	{first_name: "Ivan", last_name: "Petrov", age: 44, login: "kman", pass: "123"},
]

Person.first.jobs.create! [
	{title: "work", company: "all", position_id: "day"}
]