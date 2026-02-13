SELECT
    p.hierarchy1_id,
    p.hierarchy2_id,
    SUM(s.sales) AS total_sales
FROM sales s
JOIN product_hierarchy p
    ON s.product_id = p.product_id
GROUP BY ROLLUP (p.hierarchy1_id, p.hierarchy2_id)
ORDER BY p.hierarchy1_id, p.hierarchy2_id;
-- This query summarizes sales data along product hierarchies by using ROLLUP to generate subtotals for each hierarchy level and a grand total for all sales.