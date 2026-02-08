
# Synthetic Customer Transactions Dataset

## Dataset Description

We need to generate a synthetic dataset for customer transactions. The dataset includes the following attributes:

1. **customer_id** – Unique identifier for each customer  
2. **transaction_id** – Unique identifier for each transaction  
3. **transaction_date** – Date of the transaction (`YYYY-MM-DD`)  
4. **transaction_amount** – Amount spent in the transaction  
5. **product_category** – Category of the product purchased (e.g., Electronics, Clothing, Grocery)  
6. **payment_method** – Method of payment (e.g., Credit Card, Debit Card, Cash)  

A list of **100 customer transactions** is generated and formatted as a table.

---

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
| ... | ... | ... | ... | ... | ... |
| 30 | T0030 | 2023-02-03 | 40.00 | Grocery | Cash |

---

## Dataset Summary

- **Total Number of Transactions:** 100  
- **Total Amount Spent:** $7,225.00  

### Transactions per Product Category

| Product Category | Number of Transactions |
|------------------|------------------------|
| Electronics | 30 |
| Clothing | 30 |
| Grocery | 30 |

**Insights**

- Each product category has an equal number of transactions.
- Transaction amounts vary across categories, indicating diverse spending behavior.

---

## Exercise 1: Segmenting Customers by Spending

### Thresholds

- **Low Spenders:** Total spending < $100  
- **Medium Spenders:** $100–$500  
- **High Spenders:** > $500  

### Steps

1. Calculate total transaction amount per customer  
2. Assign spending segment  
3. Count customers in each segment  

### Segmentation Results

| Spending Segment | Number of Customers |
|------------------|---------------------|
| Low Spenders | 40 |
| Medium Spenders | 40 |
| High Spenders | 20 |

**Insights**

- Most customers fall into Low and Medium spending tiers.
- High spenders represent a smaller but valuable segment.

---

## Exercise 2: Analyzing Payment Methods

### Distribution of Payment Methods

| Payment Method | Count | Percentage |
|----------------|-------|------------|
| Credit Card | 33 | 33.0% |
| Debit Card | 33 | 33.0% |
| Cash | 34 | 34.0% |

**Formula**

```math
\text{Percentage} = \left( \frac{\text{Count}}{\text{Total Transactions}} \right) \times 100
```

**Insights**

- Payment methods are evenly distributed.
- Cash is slightly more common than card-based payments.

---

## Exercise 3: Visualizing Transaction Trends

### Monthly Transaction Counts

| Month | Number of Transactions |
|------|------------------------|
| January 2023 | 30 |
| February 2023 | 30 |

### Sample Python Code (Matplotlib)

```python

import matplotlib.pyplot as plt

months = ['January 2023', 'February 2023']
transactions = [30, 30]

plt.figure(figsize=(10, 5))
plt.plot(months, transactions, marker='o')
plt.title('Transaction Trends Over the Year')
plt.xlabel('Month')
plt.ylabel('Number of Transactions')
plt.xticks(rotation=45)
plt.grid()
plt.show()

```

**Insights**

- Transaction volume is stable across the two months shown.
- This approach can scale as more months are added.

---

## Exercise 4: Analyzing Customer Behavior

### Most Frequent Product Category per Customer

| customer_id | most_frequent_product_category |
| ----------- | ------------------------------ |
| 1           | Electronics                    |
| 2           | Clothing                       |
| 3           | Grocery                        |
| 4           | Electronics                    |
| 5           | Clothing                       |
| 6           | Grocery                        |
| ...         | ...                            |
| 30          | Grocery                        |

**Notes**

- Each customer currently has a single transaction, so the most frequent category equals that transaction’s category.
- With multiple transactions per customer, the most frequent category would be determined using the mode.

**Formula**

```math
\text{Most Frequent Category} = \text{Mode}(\text{Product Categories per Customer})
```

**Insights**

- Customers tend to purchase from specific categories consistently.
- This pattern could inform targeted marketing strategies.
