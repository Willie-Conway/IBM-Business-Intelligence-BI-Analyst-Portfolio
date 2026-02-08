SELECT 
    gender,
    COUNT(*) AS patient_count
FROM heart_disease
GROUP BY gender;


SELECT 
    CASE 
        WHEN gender = 1 THEN 'Male'
        WHEN gender = 0 THEN 'Female'
        ELSE 'Unknown'
    END AS gender_group,
    COUNT(*) AS patient_count
FROM heart_disease
GROUP BY gender;