SELECT 
    cp AS chest_pain_type,
    COUNT(*) AS frequency
FROM heart_disease
GROUP BY cp
ORDER BY frequency DESC;


SELECT 
    CASE cp
        WHEN 1 THEN 'Typical Angina'
        WHEN 2 THEN 'Atypical Angina'
        WHEN 3 THEN 'Non-anginal Pain'
        WHEN 4 THEN 'Asymptomatic'
        ELSE 'Unknown'
    END AS chest_pain_type,
    COUNT(*) AS patient_count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM heart_disease), 2) AS percentage
FROM heart_disease
GROUP BY cp
ORDER BY patient_count DESC;