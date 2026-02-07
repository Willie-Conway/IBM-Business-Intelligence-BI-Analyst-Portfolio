SELECT 
    ca AS major_vessels_colored,
    COUNT(*) AS patient_count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM heart_disease), 2) AS percentage
FROM heart_disease
GROUP BY ca
ORDER BY ca;