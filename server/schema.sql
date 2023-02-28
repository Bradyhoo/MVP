CREATE TABLE items IF NOT EXISTS (
  id SERIAL PRIMARY KEY,
  item_name VARCHAR(100)
);

CREATE INDEX item_id_idx ON items(id);

CREATE TABLE items_info IF NOT EXISTS (
  id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES items(id),
  quantity INTEGER,
  date_added timestamp,
  calories INTEGER,
  carbs INTEGER,
  fat INTEGER,
  protein INTEGER
);

CREATE INDEX item_info_id_idx ON items_info(id);