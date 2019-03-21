CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "attributes" (
    "id" SERIAL PRIMARY KEY,
    "female" BOOL DEFAULT 't',
    "male" BOOL DEFAULT 't',
    "xsmall" BOOL DEFAULT 't',
    "small" BOOL DEFAULT 't',
    "medium" BOOL DEFAULT 't',
    "large" BOOL DEFAULT 't',
    "xlarge" BOOL DEFAULT 't',
    "shedding" BOOL DEFAULT 't',
    "not shedding" BOOL DEFAULT 't',
    "activity-xlow" BOOL DEFAULT 't',
    "activity-low" BOOL DEFAULT 't',
    "activity-medium" BOOL DEFAULT 't',
    "activity-high" BOOL DEFAULT 't',
    "activity-xhigh" BOOL DEFAULT 't',
    "train-basics" BOOL DEFAULT 't',
    "train-easy" BOOL DEFAULT 't',
    "train-hard" BOOL DEFAULT 't',
    "dogs" BOOL DEFAULT 't',
    "cats" BOOL DEFAULT 't',
    "kids" BOOL DEFAULT 't',
    "other-animals" BOOL DEFAULT 't',
    "single-animal" BOOL DEFAULT 't',
    "dog-park" BOOL DEFAULT 't',
    "crowds" BOOL DEFAULT 't',
    "apartment" BOOL DEFAULT 't',
    "physical-fence" BOOL DEFAULT 't',
    "leash-walking" BOOL DEFAULT 't',
    "dog_id" INT REFERENCES "dogs"
);


CREATE TABLE "dog" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "gender" VARCHAR (15) NOT NULL,
    "age" VARCHAR (15) NOT NULL,
    "size" VARCHAR (15) NOT NULL,
    "breed" VARCHAR (100) NOT NULL,
    "coat" VARCHAR (50) NOT NULL,
    "house-trained" VARCHAR (15) NOT NULL,
    "fixed" VARCHAR (15) NOT NULL,
    "health needs" VARCHAR (15) NOT NULL,
    "comments" VARCHAR (100) NOT NULL
);

INSERT INTO "dog" ("name", "gender", "age", "size", "breed", "coat", "house-trained", "fixed", "health needs", "comments")
VALUES ('Skye', 'Male', '2 years', '70 lbs', 'Shepherd, Husky, Terrior Mix', 'White, medium length, thick fur', 'House-trained', 'Neutered', 'Has all shots', 'Very intelligent goober, sweet snuggle bug'),
('Moo', 'Male', '9 years', '65 lbs', 'Shepard, lab mix', 'Black, Medium length, Shepherd-like fur', 'House-trained', 'Neutered', 'Has all shots', 'Was very shy, still can be. Otherwise sweet and snuggly'),
('Luna', 'Female', '13 years', '13 lbs', 'West Highland Terrior Runt', 'White curly hair, needs trims', 'House-trained', 'Spayed', 'Diabetic, calm', 'A lot of personality in a small body, sweet and sassy girl');


INSERT INTO "attributes" ("female", "male", "xsmall", "small", "medium", "large", "xlarge", "shedding", "not shedding", "activity-xlow", "activity-low", "activity-medium", "activity-high", "activity-xhigh", "train-basics", "train-easy", "train-hard", "dogs", "cats", "kids", "other-animals", "single-animal", "dog-park", "crowds", "apartment", "physical-fence", "leash-walking", "dog_id")
VALUES ('f', 't', 'f', 'f', 'f', 't', 'f', 't', 'f', 'f', 'f', 'f', 'f', 't', 't', 't', 'f', 't', 't', 't', 't', 'f', 't', 'f', 'f', 'f', 't', 1),
('f', 't', 'f', 'f', 'f', 't', 'f', 't', 'f', 'f', 'f', 'f', 't', 'f', 't', 't', 'f', 't', 't', 'f', 't', 'f', 't', 'f', 'f', 'f', 't', 2),
('t', 'f', 'f', 't', 'f', 'f', 'f', 't', 'f', 'f', 't', 'f', 'f', 'f', 't', 'f', 't', 't', 'f', 't', 't', 'f', 'f', 't', 't', 'f', 't', 3);

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


