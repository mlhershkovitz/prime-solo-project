CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "attributes" (
    "id" SERIAL PRIMARY KEY,
    "female" BOOL,
    "male" BOOL,
    "xsmall" BOOL,
    "small" BOOL,
    "medium" BOOL,
    "large" BOOL,
    "xlarge" BOOL,
    "shedding" BOOL,
    "not_shedding" BOOL,
    "activity_xlow" BOOL,
    "activity_low" BOOL,
    "activity_medium" BOOL,
    "activity_high" BOOL,
    "activity_xhigh" BOOL,
    "train_basics" BOOL,
    "train_easy" BOOL,
    "train_hard" BOOL,
    "dogs" BOOL,
    "cats" BOOL,
    "kids" BOOL,
    "other_animals" BOOL,
    "single_animal" BOOL,
    "dog_park" BOOL,
    "crowds" BOOL,
    "apartment" BOOL,
    "fence" BOOL,
    "leash_walking" BOOL,
    "dog_id" INT REFERENCES "dog"
);



CREATE TABLE "dog" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "gender" VARCHAR (15) NOT NULL,
    "age" VARCHAR (15) NOT NULL,
    "size" VARCHAR (15) NOT NULL,
    "breed" VARCHAR (100) NOT NULL,
    "coat" VARCHAR (50) NOT NULL,
    "house_trained" VARCHAR (15) NOT NULL,
    "fixed" VARCHAR (15) NOT NULL,
    "health_needs" VARCHAR (15) NOT NULL,
    "comments" VARCHAR (100) NOT NULL
);

INSERT INTO "dog" ("name", "gender", "age", "size", "breed", "coat", "house_trained", "fixed", "health_needs", "comments")
VALUES ('Skye', 'Male', '2 years', '70 lbs', 'Shepherd, Husky, Terrior Mix', 'White, medium length, thick fur', 'House-trained', 'Neutered', 'Has all shots', 'Very intelligent goober, sweet snuggle bug'),
('Moo', 'Male', '9 years', '65 lbs', 'Shepard, lab mix', 'Black, Medium length, Shepherd-like fur', 'House-trained', 'Neutered', 'Has all shots', 'Was very shy, still can be. Otherwise sweet and snuggly'),
('Luna', 'Female', '13 years', '13 lbs', 'West Highland Terrior Runt', 'White curly hair, needs trims', 'House-trained', 'Spayed', 'Diabetic, calm', 'A lot of personality in a small body, sweet and sassy girl');


INSERT INTO "attributes" ("female", "male", "xsmall", "small", "medium", "large", "xlarge", "shedding", "not_shedding", "activity_xlow", "activity_low", "activity_medium", "activity_high", "activity_xhigh", "train_basics", "train_easy", "train_hard", "dogs", "cats", "kids", "other_animals", "single_animal", "dog_park", "crowds", "apartment", "fence", "leash_walking", "dog_id")
VALUES (NULL, 't', NULL, NULL, NULL, 't', NULL, 't', NULL, NULL, NULL, NULL, NULL, 't', 't', 't', NULL, 't', 't', 't', 't', NULL, 't', NULL, NULL, NULL, 't', 1),
(NULL, 't', NULL, NULL, NULL, 't', NULL, 't', NULL, NULL, NULL, NULL, 't', NULL, 't', 't', NULL, 't', 't', NULL, 't', NULL, 't', NULL, NULL, NULL, 't', 2),
('t', NULL, NULL, 't', NULL, NULL, NULL, 't', NULL, NULL, 't', NULL, NULL, NULL, 't', NULL, 't', 't', NULL, 't', 't', NULL, NULL, 't', 't', NULL, 't', 3);


ALTER TABLE "dog" 
ADD COLUMN "img_url" VARCHAR(2000);

ALTER TABLE "dog" 
ADD COLUMN "dog_bio" VARCHAR;


-- Activity level
-- snuggle level
-- how often to get groomed
-- coat maintenance level (brushing)
-- special needs levels
    --meds
    --shots
    --mobility
    --
-- social level w/people
    --okay with crowds
    --okay with new people
    --only people in my house
    --slow intros
    --I will only really love you, unless you work with me alot
-- social level w/ dogs
    --bestest friends with everyone
    --dog park
    --just leash agressive
    --okay to walk around
    --please dont bring me around other dogs
-- area to live in
    -- not an apartment dog etc
-- Other dog in the house
    -- need
    -- cannot
    --doesnt matter?
-- other creatures in the house
    -- kids / No kids
    -- cats
    -- birds
    -- small animals
-- how long can I be alone in a day?
    -- separation anxiety (least amount humanly possible)
    -- I'm a puppy, I need to go out every 2 hours
-- sex
    -- female
    -- male
-- size dog
-- Hair vs fur

-- shedding
-- trainability
-- size
-- knows basic training
-- activity level
-- snuggle level
-- sex
-- socialization? (where would you like to go with this dog?)
-- Who are they comfortable with


