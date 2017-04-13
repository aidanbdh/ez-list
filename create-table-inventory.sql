DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory (
  id        serial,
  user      int references users(id),
  name      varchar,
  price     decimal(8,2),
  location  varchar
)
