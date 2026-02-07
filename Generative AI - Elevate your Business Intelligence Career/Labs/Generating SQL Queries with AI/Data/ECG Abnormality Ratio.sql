SELECT 
    SUM(CASE WHEN restecg IN (1, 2) THEN 1 ELSE 0 END) AS abnormal_ecg_count,
    SUM(CASE WHEN restecg = 0 THEN 1 ELSE 0 END) AS normal_ecg_count,
    ROUND(
        SUM(CASE WHEN restecg IN (1, 2) THEN 1 ELSE 0 END) * 1.0 / 
        NULLIF(SUM(CASE WHEN restecg = 0 THEN 1 ELSE 0 END), 0), 
        2
    ) AS abnormal_to_normal_ratio
FROM heart_disease;