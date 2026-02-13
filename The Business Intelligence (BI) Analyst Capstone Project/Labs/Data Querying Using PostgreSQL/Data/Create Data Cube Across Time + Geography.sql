SELECT 
    c.city_id,
    TO_CHAR(s.date, 'YYYY-MM') AS sale_month,
    SUM(s.sales) AS total_sales
FROM sales s
JOIN store_cities c
    ON s.store_id = c.store_id
GROUP BY ROLLUP (c.city_id, TO_CHAR(s.date, 'YYYY-MM'))
ORDER BY c.city_id, sale_month;
