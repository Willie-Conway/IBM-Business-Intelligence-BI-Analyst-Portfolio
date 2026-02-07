SELECT 
    CASE
        WHEN age BETWEEN 20 AND 29 THEN '20-29'
        WHEN age BETWEEN 30 AND 39 THEN '30-39'
        WHEN age BETWEEN 40 AND 49 THEN '40-49'
        WHEN age BETWEEN 50 AND 59 THEN '50-59'
        WHEN age BETWEEN 60 AND 69 THEN '60-69'
        WHEN age >= 70 THEN '70+'
        ELSE 'Unknown'
    END AS age_group,
    COUNT(*) AS total_patients,
    SUM(CASE WHEN num = 1 THEN 1 ELSE 0 END) AS heart_disease_cases,
    SUM(CASE WHEN num = 0 THEN 1 ELSE 0 END) AS no_heart_disease,
    ROUND(SUM(CASE WHEN num = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS disease_percentage
FROM heart_disease
GROUP BY 
    CASE
        WHEN age BETWEEN 20 AND 29 THEN '20-29'
        WHEN age BETWEEN 30 AND 39 THEN '30-39'
        WHEN age BETWEEN 40 AND 49 THEN '40-49'
        WHEN age BETWEEN 50 AND 59 THEN '50-59'
        WHEN age BETWEEN 60 AND 69 THEN '60-69'
        WHEN age >= 70 THEN '70+'
        ELSE 'Unknown'
    END
ORDER BY age_group;