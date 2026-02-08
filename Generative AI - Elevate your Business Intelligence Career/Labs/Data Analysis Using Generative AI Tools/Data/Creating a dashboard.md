

# Synthetic Customer Transactions Analysis

## Dataset Description

We generate a **synthetic dataset of customer transactions** with the following attributes:

1. **customer_id** – Unique identifier for each customer
2. **transaction_id** – Unique identifier for each transaction
3. **transaction_date** – Date of the transaction (`YYYY-MM-DD`)
4. **transaction_amount** – Amount spent in the transaction
5. **product_category** – Category of the product purchased (e.g., Electronics, Clothing, Grocery)
6. **payment_method** – Method of payment (e.g., Credit Card, Debit Card, Cash)

A total of **100 customer transactions** are generated and formatted as a table.

---

## Sample Transaction Dataset

| customer_id | transaction_id | transaction_date | transaction_amount | product_category | payment_method |
| ----------- | -------------- | ---------------- | ------------------ | ---------------- | -------------- |
| 1           | T0001          | 2023-01-05       | 150.00             | Electronics      | Credit Card    |
| 2           | T0002          | 2023-01-06       | 75.50              | Clothing         | Debit Card     |
| 3           | T0003          | 2023-01-07       | 20.00              | Grocery          | Cash           |
| 4           | T0004          | 2023-01-08       | 200.00             | Electronics      | Credit Card    |
| 5           | T0005          | 2023-01-09       | 50.00              | Clothing         | Debit Card     |
| ...         | ...            | ...              | ...                | ...              | ...            |

---

## Dataset Summary

### Key Metrics

* **Total Number of Transactions:** 100
* **Total Amount Spent:** $7,225.00

### Transactions per Product Category

| Product Category | Number of Transactions |
| ---------------- | ---------------------- |
| Electronics      | 30                     |
| Clothing         | 30                     |
| Grocery          | 30                     |

---

## Exercise 1: Segmenting Customers by Spending

### Spending Thresholds

* **Low Spenders:** Total spending < $100
* **Medium Spenders:** $100 – $500
* **High Spenders:** > $500

### Segmentation Results

| Spending Segment | Number of Customers |
| ---------------- | ------------------- |
| Low Spenders     | 40                  |
| Medium Spenders  | 40                  |
| High Spenders    | 20                  |

---

## Exercise 2: Payment Method Analysis

### Distribution of Payment Methods

| Payment Method | Count | Percentage |
| -------------- | ----- | ---------- |
| Credit Card    | 33    | 33.0%      |
| Debit Card     | 33    | 33.0%      |
| Cash           | 34    | 34.0%      |

### Percentage Formula

```math
\text{Percentage} = \left( \frac{\text{Count}}{\text{Total Transactions}} \right) \times 100
```

---

## Exercise 3: Transaction Trends Over Time

### Monthly Transaction Counts

| Month         | Number of Transactions |
| ------------- | ---------------------- |
| January 2023  | 30                     |
| February 2023 | 30                     |

### Python Visualization Code

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

---

## Exercise 4: Customer Behavior Analysis

### Most Frequent Product Category per Customer

```math
\text{Most Frequent Category} = \text{Mode}(\text{Product Categories per Customer})
```

| customer_id | most_frequent_product_category |
| ----------- | ------------------------------ |
| 1           | Electronics                    |
| 2           | Clothing                       |
| 3           | Grocery                        |
| ...         | ...                            |

---

## Exercise 5: Spending Distribution

### Histogram Visualization Code

```python
import matplotlib.pyplot as plt

transaction_amounts = [
    150.00, 75.50, 20.00, 200.00, 50.00, 10.00, 300.00, 60.00,
    25.00, 120.00, 90.00, 15.00, 250.00, 45.00, 30.00
]

plt.figure(figsize=(10, 5))
plt.hist(transaction_amounts, bins=10, edgecolor='black')
plt.title('Distribution of Transaction Amounts')
plt.xlabel('Transaction Amount ($)')
plt.ylabel('Frequency')
plt.grid(axis='y')
plt.show()
```

---

## Exercise 6: High-Value Customers

### Top 10 Customers by Total Spending

| Rank | customer_id | Total Spending |
| ---- | ----------- | -------------- |
| 1    | 7           | $300.00        |
| 2    | 13          | $250.00        |
| 3    | 19          | $220.00        |
| 4    | 28          | $210.00        |
| 5    | 4           | $200.00        |
| 6    | 16          | $180.00        |
| 7    | 22          | $160.00        |
| 8    | 1           | $150.00        |
| 9    | 25          | $140.00        |
| 10   | 10          | $120.00        |

---

## Exercise 7: Correlation Analysis

**Objective:**
Analyze the relationship between **transaction amount** and **product category** by encoding categorical variables and computing correlation metrics.

---

## Exercise 8: Monthly Sales Analysis

### Monthly Sales Totals

| Month         | Total Sales |
| ------------- | ----------- |
| January 2023  | $1,500.00   |
| February 2023 | $1,200.00   |

**Highest Sales Month:** **January 2023**

---

## Exercise 9: Customer Retention

### Retention Metrics

| Metric                     | Value   |
| -------------------------- | ------- |
| Number of Repeat Customers | 3       |
| Total Transaction Amount   | $925.00 |
| Average Transaction Amount | $132.14 |

---

## Exercise 10: Dashboard Design

### Key Metrics

* Total Transactions: 100
* Total Revenue: $7,225.00
* Average Transaction Amount: $72.25
* Repeat Customers: 3

### Recommended Visuals

* Transaction Amount Histogram
* Payment Method Pie Chart
* Monthly Sales Line Chart
* Product Category Bar Chart

### Tools

* Tableau
* Power BI
* Google Data Studio
* Python (Matplotlib / Seaborn)


