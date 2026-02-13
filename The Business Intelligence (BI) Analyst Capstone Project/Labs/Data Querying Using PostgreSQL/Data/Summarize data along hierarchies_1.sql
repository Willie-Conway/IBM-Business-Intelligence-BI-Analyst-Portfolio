SELECT
/* The first level of product hierarchy ID */,   /*The second level of product hierarchy  ID*/
SUM(/* Column to sum for sales */) AS /* Alias for total sales*/
FROM 
  /*Sales table alias*/
JOIN 
  /* table name */ p 
ON 
  /* Condition to join sales table and product hierarchy table using product ID */
GROUP BY 
  /* SQL function to group data with subtotals for hierarchy levels */; 
    