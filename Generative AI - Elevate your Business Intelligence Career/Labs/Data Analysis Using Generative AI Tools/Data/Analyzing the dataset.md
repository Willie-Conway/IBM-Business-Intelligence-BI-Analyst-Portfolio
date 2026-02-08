
## Synthetic Customer Transactions Dataset

We need to generate a synthetic dataset for customer transactions. The dataset includes the following attributes:

1. **customer_id** – Unique identifier for each customer  
2. **transaction_id** – Unique identifier for each transaction  
3. **transaction_date** – Date of the transaction (YYYY-MM-DD)  
4. **transaction_amount** – Amount spent in the transaction  
5. **product_category** – Category of the product purchased (e.g., Electronics, Clothing, Grocery)  
6. **payment_method** – Method of payment (e.g., Credit Card, Debit Card, Cash)

### Sample of the Synthetic Dataset

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
| ... | ... | ... | ... | ... | ... |

---

## Dataset Summary

- **Total Number of Transactions:** 100  
- **Total Amount Spent:** $7,225.00  

### Number of Transactions per Product Category

| Product Category | Number of Transactions |
|------------------|-----------------------|
| Electronics | 30 |
| Clothing | 30 |
| Grocery | 30 |

---

## Exercise 1: Segmenting Customers by Spending

### Spending Thresholds
- **Low Spenders:** Total spending < $100  
- **Medium Spenders:** Total spending between $100 and $500  
- **High Spenders:** Total spending > $500  

### Segmentation Results

| Spending Segment | Number of Customers |
|------------------|---------------------|
| Low Spenders | 40 |
| Medium Spenders | 40 |
| High Spenders | 20 |

**Insights:**
- Most customers fall into the Low and Medium spending categories.
- High spenders represent a smaller but potentially high-value group.

---

## Exercise 2: Payment Method Analysis

### Distribution of Payment Methods

| Payment Method | Count | Percentage |
|----------------|-------|------------|
| Credit Card | 33 | 33.0% |
| Debit Card | 33 | 33.0% |
| Cash | 34 | 34.0% |


**Percentage Formula:**
```math
\text{Percentage} = \left( \frac{\text{Count}}{\text{Total Transactions}} \right) \times 100
```
**Insights:**
- Payment methods are evenly distributed.
- Cash is marginally the most used method, followed closely by Credit and Debit cards.
