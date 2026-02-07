SELECT 
    CASE 
        WHEN gender = 1 THEN 'Male'
        WHEN gender = 0 THEN 'Female'
    END AS gender_group,
    MIN(age) AS youngest,
    MAX(age) AS oldest,
    MAX(age) - MIN(age) AS age_range
FROM heart_disease
GROUP BY gender;