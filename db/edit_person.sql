UPDATE people 
SET name = $2,
age = $3
WHERE id = $1;