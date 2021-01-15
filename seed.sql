-- ==================================================================
use hydro_db;

INSERT INTO all_Reviews (brand, carbonation, flavor, title, body, rating, user_name, email, createdAt, updatedAt)
VALUES ("Bubly", true, "Grape", "Yum", "Tastes great", 5, "ReindeerCode", "ReindeerCode@gmail.com", current_timestamp(), CURRENT_TIMESTAMP);

select * from all_Reviews

-- ==================================================================
use hydro_db;

INSERT INTO brand (brand_name, createdAt, updatedAt)
VALUES ("Bubly", current_timestamp(), CURRENT_TIMESTAMP);

select * from brand

-- ==================================================================

use hydro_db;

INSERT INTO Bubbles (carbonation, createdAt, updatedAt)
VALUES (1, current_timestamp(), CURRENT_TIMESTAMP);

INSERT INTO Bubbles (carbonation, createdAt, updatedAt)
VALUES (2, current_timestamp(), CURRENT_TIMESTAMP);

select * from Bubbles

-- ==================================================================
use hydro_db;

INSERT INTO brand (brand_name, createdAt, updatedAt)
VALUES ("Bubly", current_timestamp(), CURRENT_TIMESTAMP);

select * from brand

-- ==================================================================

use hydro_db;

INSERT INTO Flavor (flavor, createdAt, updatedAt)
VALUES ("Peach", current_timestamp(), CURRENT_TIMESTAMP);

select * from Flavor

-- ==================================================================

use hydro_db;

INSERT INTO User (user_name, email, createdAt, updatedAt)
VALUES ("ReindeerCode", "ReindeerCode@gmail.com", current_timestamp(), CURRENT_TIMESTAMP);

select * from User
