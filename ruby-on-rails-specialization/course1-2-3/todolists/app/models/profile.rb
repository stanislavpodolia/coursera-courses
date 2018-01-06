class Profile < ActiveRecord::Base
	belongs_to :user

	validate :first_name_and_last_name_is_not_nil
	validates :gender, inclusion: { in: ["female", "male"],
    	message: "%{value} is not a valid gender!" }
    validate :correct_gender

    def first_name_and_last_name_is_not_nil
    	if (!first_name && !last_name)
    		errors.add(:first_name, "cannot be nil!")
    		errors.add(:last_name, "cannot be nil!")
    	end
    end

    def correct_gender
    	if (gender == "male" && first_name == "Sue")
    		errors.add(:first_name, "cannot be male!")
    	end
    end

    def self.get_all_profiles(min, max)
		self.all.where("birth_year BETWEEN ? AND ?", min, max).order(:birth_year)
	end
end
