SELECT 
  p.product_id,
  c.store_id,
  c.city_id,
  SUM(sl.sales) AS total_sales,
  SUM(sl.revenue) AS total_revenue,
  AVG(sl.price) AS average_price
FROM sales sl
INNER JOIN product_hierarchy p 
    ON sl.product_id = p.product_id
INNER JOIN store_cities c 
    ON sl.store_id = c.store_id
GROUP BY p.product_id, c.store_id, c.city_id;
-- This query aggregates sales data by product, store, and city,
-- calculating total sales, total revenue, and average price for each combination.