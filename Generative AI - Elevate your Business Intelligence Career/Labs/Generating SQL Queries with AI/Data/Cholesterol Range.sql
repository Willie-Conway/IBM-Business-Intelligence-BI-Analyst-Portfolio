SELECT 
    MIN(chol) AS min_cholesterol,
    MAX(chol) AS max_cholesterol,
    MAX(chol) - MIN(chol) AS cholesterol_range
FROM heart_disease;