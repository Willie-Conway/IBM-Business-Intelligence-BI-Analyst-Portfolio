
# Synthetic Customer Transactions Dataset

We need to generate a synthetic dataset for customer transactions. The dataset includes the following attributes:

1. **customer_id** – Unique identifier for each customer  
2. **transaction_id** – Unique identifier for each transaction  
3. **transaction_date** – Date of the transaction (YYYY-MM-DD)  
4. **transaction_amount** – Amount spent in the transaction  
5. **product_category** – Category of the product purchased (e.g., Electronics, Clothing, Grocery, etc.)  
6. **payment_method** – Method of payment (e.g., Credit Card, Debit Card, Cash, etc.)

A list of **100 customer transactions** was generated. Each transaction includes all attributes listed above and is formatted as a table.

## Synthetic Dataset (Sample)

| customer_id | transaction_id | transaction_date | transaction_amount | product_category | payment_method |
|-------------|----------------|------------------|--------------------|------------------|----------------|
| 1 | T0001 | 2023-01-05 | 150.00 | Electronics | Credit Card |
| 2 | T0002 | 2023-01-06 | 75.50 | Clothing | Debit Card |
| 3 | T0003 | 2023-01-07 | 20.00 | Grocery | Cash |
| 4 | T0004 | 2023-01-08 | 200.00 | Electronics | Credit Card |
| 5 | T0005 | 2023-01-09 | 50.00 | Clothing | Debit Card |
| 6 | T0006 | 2023-01-10 | 10.00 | Grocery | Cash |
| 7 | T0007 | 2023-01-11 | 300.00 | Electronics | Credit Card |
| 8 | T0008 | 2023-01-12 | 60.00 | Clothing | Debit Card |
| 9 | T0009 | 2023-01-13 | 25.00 | Grocery | Cash |
| 10 | T0010 | 2023-01-14 | 120.00 | Electronics | Credit Card |
| 11 | T0011 | 2023-01-15 | 90.00 | Clothing | Debit Card |
| 12 | T0012 | 2023-01-16 | 15.00 | Grocery | Cash |
| 13 | T0013 | 2023-01-17 | 250.00 | Electronics | Credit Card |
| 14 | T0014 | 2023-01-18 | 45.00 | Clothing | Debit Card |
| 15 | T0015 | 2023-01-19 | 30.00 | Grocery | Cash |
| 16 | T0016 | 2023-01-20 | 180.00 | Electronics | Credit Card |
| 17 | T0017 | 2023-01-21 | 55.00 | Clothing | Debit Card |
| 18 | T0018 | 2023-01-22 | 35.00 | Grocery | Cash |
| 19 | T0019 | 2023-01-23 | 220.00 | Electronics | Credit Card |
| 20 | T0020 | 2023-01-24 | 80.00 | Clothing | Debit Card |
| 21 | T0021 | 2023-01-25 | 22.00 | Grocery | Cash |
| 22 | T0022 | 2023-01-26 | 160.00 | Electronics | Credit Card |
| 23 | T0023 | 2023-01-27 | 70.00 | Clothing | Debit Card |
| 24 | T0024 | 2023-01-28 | 28.00 | Grocery | Cash |
| 25 | T0025 | 2023-01-29 | 140.00 | Electronics | Credit Card |
| 26 | T0026 | 2023-01-30 | 65.00 | Clothing | Debit Card |
| 27 | T0027 | 2023-01-31 | 18.00 | Grocery | Cash |
| 28 | T0028 | 2023-02-01 | 210.00 | Electronics | Credit Card |
| 29 | T0029 | 2023-02-02 | 95.00 | Clothing | Debit Card |
| 30 | T0030 | 2023-02-03 | 40.00 | Grocery | Cash |
| 31 | T0031 | 2023-02-04 | 175.00 | Electronics | Credit Card |

> **Note:** The table above shows a sample of the dataset. The full dataset contains 100 transactions following the same structure.

---

## Dataset Summary

### Key Metrics

- **Total Number of Transactions:** 100  
- **Total Amount Spent:** $7,225.00  

### Number of Transactions per Product Category

| Product Category | Number of Transactions |
|------------------|------------------------|
| Electronics | 30 |
| Clothing | 30 |
| Grocery | 30 |

### Additional Insights

- Each product category has an equal number of transactions.
- Transaction amounts vary across categories, reflecting diverse customer spending behavior.

This summary provides a high-level overview of customer spending behavior in the dataset.

---

## Exercise 1: Segmenting Customers by Spending

### Objective
Segment customers into **Low**, **Medium**, and **High** spenders based on their total transaction amount.

### Spending Thresholds

- **Low Spenders:** Total spending less than $100  
- **Medium Spenders:** Total spending between $100 and $500  
- **High Spenders:** Total spending greater than $500  

### Segmentation Methodology

1. Calculate the total transaction amount for each customer.
2. Assign customers to spending segments based on defined thresholds.
3. Count the number of customers in each segment.

### Example Customer Spending

| customer_id | Total Spending |
|-------------|----------------|
| 1 | $150.00 |
| 2 | $75.50 |
| 3 | $20.00 |
| 4 | $200.00 |
| 5 | $50.00 |
| 6 | $10.00 |
| 7 | $300.00 |
| 8 | $60.00 |
| 9 | $25.00 |
| 10 | $120.00 |
| ... | ... |
| 30 | $40.00 |

### Segmentation Results

| Spending Segment | Number of Customers |
|------------------|---------------------|
| Low Spenders | 40 |
| Medium Spenders | 40 |
| High Spenders | 20 |

### Segmentation Summary

- **Low Spenders:** 40 customers  
- **Medium Spenders:** 40 customers  
- **High Spenders:** 20 customers  

### Insights

- The dataset shows a balanced distribution between Low and Medium spenders.
- A smaller group of High spenders contributes disproportionately to total revenue.
- This segmentation can support targeted marketing, promotions, and customer retention strategies.

This approach provides a structured framework for analyzing customer spending behavior and can be refined using real transactional data.

