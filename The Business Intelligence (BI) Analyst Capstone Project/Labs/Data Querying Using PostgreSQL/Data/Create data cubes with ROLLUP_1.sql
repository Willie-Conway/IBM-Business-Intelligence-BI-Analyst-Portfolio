    
SELECT 
/* Column for store identification */, 
TO_CHAR( (/* Column for date */,, 'YYYY-MM') AS /* Alias for formatted date */), 
SUM( (/* Column for sales figures */)) AS  /* Alias for sum of sales */   
FROM 
/* Name of the sales table */  
GROUP BY 
/* Grouping function */ ((/* Column for store identification */, /* Alias for formatted date */)); 

    