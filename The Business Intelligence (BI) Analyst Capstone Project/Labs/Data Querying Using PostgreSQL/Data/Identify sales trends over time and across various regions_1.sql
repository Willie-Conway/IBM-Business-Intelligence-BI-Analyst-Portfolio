SELECT 
  /* Column representing the city identification */  
TO_CHAR
( (/* Column representing the date of sale */, 'YYYY-MM') AS /* Alias for the month of the sale */),  
SUM( (/* Column representing the sales amount */)) AS /* Alias for the total sales sum */   
FROM 
  /* Table name for sales data */  s 
JOIN 
    /* Table name for store and city information */  c 
ON 
  s. /* Column representing store identification */ = c../* Column representing store identification */  
GROUP BY 
  /* Grouping function */ ((/* Column for city identification */, /* Alias for formatted date */)); 
