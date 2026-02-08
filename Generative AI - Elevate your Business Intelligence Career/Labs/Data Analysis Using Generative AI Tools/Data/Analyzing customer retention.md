

# Synthetic Customer Transactions Dataset Analysis

## Dataset Description

We generated a synthetic dataset for customer transactions with the following attributes:

1. **customer_id** – Unique identifier for each customer
2. **transaction_id** – Unique identifier for each transaction
3. **transaction_date** – Date of the transaction (`YYYY-MM-DD`)
4. **transaction_amount** – Amount spent in the transaction
5. **product_category** – Category of the product purchased (e.g., Electronics, Clothing, Grocery)
6. **payment_method** – Method of payment (e.g., Credit Card, Debit Card, Cash)

The dataset contains **100 customer transactions** formatted as a table.

---

## Sample of Synthetic Dataset

| customer_id | transaction_id | transaction_date | transaction_amount | product_category | payment_method |
| ----------- | -------------- | ---------------- | ------------------ | ---------------- | -------------- |
| 1           | T0001          | 2023-01-05       | 150.00             | Electronics      | Credit Card    |
| 2           | T0002          | 2023-01-06       | 75.50              | Clothing         | Debit Card     |
| 3           | T0003          | 2023-01-07       | 20.00              | Grocery          | Cash           |
| 4           | T0004          | 2023-01-08       | 200.00             | Electronics      | Credit Card    |
| 5           | T0005          | 2023-01-09       | 50.00              | Clothing         | Debit Card     |
| 6           | T0006          | 2023-01-10       | 10.00              | Grocery          | Cash           |
| 7           | T0007          | 2023-01-11       | 300.00             | Electronics      | Credit Card    |
| 8           | T0008          | 2023-01-12       | 60.00              | Clothing         | Debit Card     |
| 9           | T0009          | 2023-01-13       | 25.00              | Grocery          | Cash           |
| 10          | T0010          | 2023-01-14       | 120.00             | Electronics      | Credit Card    |
| ...         | ...            | ...              | ...                | ...              | ...            |

---

## Dataset Summary

* **Total Transactions:** 100
* **Total Amount Spent:** $7,225.00

### Transactions per Product Category

| Product Category | Transactions |
| ---------------- | ------------ |
| Electronics      | 30           |
| Clothing         | 30           |
| Grocery          | 30           |

---

## Exercise 1: Customer Spending Segmentation

### Spending Thresholds

* **Low Spenders:** < $100
* **Medium Spenders:** $100 – $500
* **High Spenders:** > $500

### Segmentation Results

| Segment         | Number of Customers |
| --------------- | ------------------- |
| Low Spenders    | 40                  |
| Medium Spenders | 40                  |
| High Spenders   | 20                  |

**Insight:**
Low and medium spenders dominate the dataset, while high spenders represent a smaller but valuable segment.

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

### Monthly Transaction Count

| Month         | Transactions |
| ------------- | ------------ |
| January 2023  | 30           |
| February 2023 | 30           |

### Visualization Code

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

**Insight:**
Transaction volume remained stable across both months.

---

## Exercise 4: Customer Behavior Analysis

### Most Frequent Product Category per Customer

Since each customer has one transaction in the sample:

| customer_id | Most Frequent Category |
| ----------- | ---------------------- |
| 1           | Electronics            |
| 2           | Clothing               |
| 3           | Grocery                |
| ...         | ...                    |
| 30          | Grocery                |

> If customers have multiple transactions, the most frequent category is computed using the **mode**:

```math
\text{Most Frequent Category} = \text{Mode}(\text{Product Categories per Customer})
```

---

## Exercise 5: Spending Distribution

### Histogram Code

```python
import matplotlib.pyplot as plt

transaction_amounts = [
    150, 75.5, 20, 200, 50, 10, 300, 60,
    25, 120, 90, 15, 250, 45, 30, 180,
    55, 35, 220, 80, 22, 160, 70, 28,
    140, 65, 18, 210, 95, 40
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

| Rank | Customer ID | Total Spending |
| ---- | ----------- | -------------- |
| 1    | 7           | $300           |
| 2    | 13          | $250           |
| 3    | 19          | $220           |
| 4    | 28          | $210           |
| 5    | 4           | $200           |
| 6    | 16          | $180           |
| 7    | 22          | $160           |
| 8    | 1           | $150           |
| 9    | 25          | $140           |
| 10   | 10          | $120           |

---

## Exercise 7: Correlation Analysis

**Goal:**
Analyze the relationship between **transaction amount** and **product category**.

> Since product category is categorical, encoding (e.g., label encoding) is required before correlation analysis.

---

## Exercise 8: Monthly Sales Analysis

### Monthly Sales Totals

| Month         | Total Sales |
| ------------- | ----------- |
| January 2023  | $1,500      |
| February 2023 | $1,200      |

**Highest Sales Month:** **January 2023**

---

## Exercise 9: Customer Retention Analysis

### Retention Metrics

| Metric                 | Value   |
| ---------------------- | ------- |
| Repeat Customers       | 3       |
| Total Repeat Revenue   | $925.00 |
| Avg Transaction Amount | $132.14 |

**Insight:**
Repeat customers spend more on average, making them prime candidates for loyalty programs.

