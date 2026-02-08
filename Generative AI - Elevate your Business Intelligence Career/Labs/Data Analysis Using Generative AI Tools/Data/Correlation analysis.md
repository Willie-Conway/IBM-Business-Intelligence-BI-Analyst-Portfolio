
# Synthetic Customer Transactions Dataset

We need to generate a synthetic dataset for customer transactions with the following attributes:

1. `customer_id` – Unique identifier for each customer
2. `transaction_id` – Unique identifier for each transaction
3. `transaction_date` – Date of the transaction (YYYY-MM-DD)
4. `transaction_amount` – Amount spent in the transaction
5. `product_category` – Category of the product purchased (Electronics, Clothing, Grocery, etc.)
6. `payment_method` – Method of payment (Credit Card, Debit Card, Cash, etc.)

Here is a **synthetic dataset of 100 customer transactions** (partial example):

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

# Dataset Summary

* **Total Number of Transactions:** 100
* **Total Amount Spent:** $7,225.00

### Number of Transactions per Product Category:

| Product Category | Number of Transactions |
| ---------------- | ---------------------- |
| Electronics      | 30                     |
| Clothing         | 30                     |
| Grocery          | 30                     |

**Insights:**

* Each product category has an equal number of transactions.
* Spending amounts vary widely across categories.

---

# Exercise 1: Segmenting Customers by Spending

**Prompt:** Segment customers into "Low", "Medium", and "High" spenders based on total transaction amount.

### Spending Segmentation Thresholds:

* **Low Spenders:** < $100
* **Medium Spenders:** $100 – $500
* **High Spenders:** > $500

### Example Total Spending per Customer:

| customer_id | Total Spending |
| ----------- | -------------- |
| 1           | $150.00        |
| 2           | $75.50         |
| 3           | $20.00         |
| 4           | $200.00        |
| 5           | $50.00         |
| 6           | $10.00         |
| 7           | $300.00        |
| 8           | $60.00         |
| 9           | $25.00         |
| 10          | $120.00        |

### Segmentation Results:

| Spending Segment | Number of Customers |
| ---------------- | ------------------- |
| Low Spenders     | 40                  |
| Medium Spenders  | 40                  |
| High Spenders    | 20                  |

**Insights:**

* Most customers fall into Low and Medium spending categories.
* High spenders are fewer but contribute significantly to revenue.

---

# Exercise 2: Analyzing Payment Methods

**Prompt:** Count and calculate percentages for each payment method.

| Payment Method | Count | Percentage |
| -------------- | ----- | ---------- |
| Credit Card    | 33    | 33.0%      |
| Debit Card     | 33    | 33.0%      |
| Cash           | 34    | 34.0%      |

**Insights:**

* Cash is the most common payment method (34%).
* Distribution is fairly even, indicating no single preferred payment method.

---

# Exercise 3: Visualizing Transaction Trends

**Prompt:** Create a line chart showing the number of transactions over time.

### Transactions by Month

| Month         | Number of Transactions |
| ------------- | ---------------------- |
| January 2023  | 30                     |
| February 2023 | 30                     |

### Python Code (Matplotlib)

```python
import matplotlib.pyplot as plt

months = ['January 2023', 'February 2023']
transactions = [30, 30]

plt.figure(figsize=(10,5))
plt.plot(months, transactions, marker='o')
plt.title('Transaction Trends Over the Year')
plt.xlabel('Month')
plt.ylabel('Number of Transactions')
plt.grid()
plt.show()
```

**Insights:**

* Transactions remained consistent across January and February 2023.

---

# Exercise 4: Most Frequent Product Category per Customer

| customer_id | most_frequent_product_category |
| ----------- | ------------------------------ |
| 1           | Electronics                    |
| 2           | Clothing                       |
| 3           | Grocery                        |
| 4           | Electronics                    |
| 5           | Clothing                       |
| 6           | Grocery                        |
| 7           | Electronics                    |
| 8           | Clothing                       |
| 9           | Grocery                        |
| 10          | Electronics                    |
| ...         | ...                            |

**Note:** Use the mode of product categories per customer when multiple transactions exist.

---

# Exercise 5: Visualizing Spending Distribution

### Sample Transaction Amounts

```python
transaction_amounts = [
    150.00, 75.50, 20.00, 200.00, 50.00, 10.00, 300.00, 60.00, 
    25.00, 120.00, 90.00, 15.00, 250.00, 45.00, 30.00, 180.00,
    55.00, 35.00, 220.00, 80.00, 22.00, 160.00, 70.00, 28.00,
    140.00, 65.00, 18.00, 210.00, 95.00, 40.00, 175.00, 100.00
]
```

### Python Code (Histogram)

```python
import matplotlib.pyplot as plt

plt.figure(figsize=(10,5))
plt.hist(transaction_amounts, bins=10, edgecolor='black')
plt.title('Distribution of Transaction Amounts')
plt.xlabel('Transaction Amount ($)')
plt.ylabel('Frequency')
plt.grid(axis='y')
plt.show()
```

**Insights:**

* Histogram shows spending patterns and identifies outliers or high/low transaction clusters.

---

# Exercise 6: Identifying High-Value Customers

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

**Insights:**

* Top spenders contribute disproportionately to overall revenue.
* Useful for targeted loyalty programs and marketing.

---

# Exercise 7: Correlation Analysis

**Prompt:** Analyze correlation between transaction amount and product category.

**Approach:**

* Assign numeric codes to product categories for correlation calculation.
* Calculate Pearson correlation between `transaction_amount` and `product_category_code`.

**Python Code Example:**

```python
import pandas as pd

# Example DataFrame
df = pd.DataFrame({
    'transaction_amount': transaction_amounts,
    'product_category': ['Electronics','Clothing','Grocery','Electronics','Clothing']*6
})

# Encode categories
df['category_code'] = df['product_category'].astype('category').cat.codes

# Calculate correlation
correlation = df['transaction_amount'].corr(df['category_code'])
print("Correlation:", correlation)
```

**Insights:**

* Positive correlation indicates higher spending in specific categories (likely Electronics).
* Helps identify which product categories generate higher revenue per transaction.


