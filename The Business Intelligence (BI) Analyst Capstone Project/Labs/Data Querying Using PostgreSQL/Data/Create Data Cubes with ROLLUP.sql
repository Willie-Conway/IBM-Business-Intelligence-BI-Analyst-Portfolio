SELECT 
    store_id,
    TO_CHAR(date, 'YYYY-MM') AS sale_month,
    SUM(sales) AS total_sales
FROM sales
GROUP BY ROLLUP (store_id, TO_CHAR(date, 'YYYY-MM'))
ORDER BY store_id, sale_month;

-- This query creates a data cube using ROLLUP to aggregate total sales by store and month.
-- The ROLLUP function generates subtotals for each store and a grand total for all