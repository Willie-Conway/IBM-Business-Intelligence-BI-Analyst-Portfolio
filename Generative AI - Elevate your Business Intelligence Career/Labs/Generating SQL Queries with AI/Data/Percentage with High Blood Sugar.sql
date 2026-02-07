SELECT 
    SUM(CASE WHEN fbs = 1 THEN 1 ELSE 0 END) AS high_blood_sugar_count,
    COUNT(*) AS total_patients,
    ROUND(SUM(CASE WHEN fbs = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS percentage_high_blood_sugar
FROM heart_disease;