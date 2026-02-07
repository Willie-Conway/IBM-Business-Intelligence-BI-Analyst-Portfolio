SELECT 
    CASE cp
        WHEN 1 THEN 'Typical Angina'
        WHEN 2 THEN 'Atypical Angina'
        WHEN 3 THEN 'Non-anginal Pain'
        WHEN 4 THEN 'Asymptomatic'
    END AS chest_pain_type,
    ROUND(AVG(age), 2) AS average_age,
    COUNT(*) AS patient_count
FROM heart_disease
GROUP BY cp
ORDER BY average_age;